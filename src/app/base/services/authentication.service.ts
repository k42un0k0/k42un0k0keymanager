import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { CognitoUser } from '@aws-amplify/auth';
import { promisify } from 'util';
import { BehaviorSubject, from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { UserAccountRepository } from '../repositories/user-account.repository';

type SignUpArg = { username: string, password: string, email: string };
type ConfirmSignUpArg = { username: string, code: string };
type SignInArg = { username: string, password: string };
type ResendConfirmationCodeArg = { username: string };

type User = {
  sub: string,
  username: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private userAccountRepository: UserAccountRepository) {
    this.initializeResult = Auth.currentAuthenticatedUser().then(async (v) => {
      await this.setUserFromCognitoUser(v)
    }).catch(() => { });
    this.user.subscribe((v) => {
      if (!!v) {
        this.userAccountRepository.startSubscribe(v.sub);
      } else {
        this.userAccountRepository.endSubscribe();
      }
    })
  }

  initializeResult: Promise<void>;

  async setUserFromCognitoUser(cognitoUser: CognitoUser) {
    const sub = (await promisify(cognitoUser.getUserAttributes.bind(cognitoUser))())?.find((_) => _.Name == "sub")?.Value;
    if (sub == null) {
      throw Error("sub not found");
    }
    this.user.next(
      {
        sub,
        username: cognitoUser.getUsername()
      }
    )
  }

  user = new BehaviorSubject<User | null>(null);

  get isSignedIn() {
    return from(this.initializeResult).pipe(mergeMap(() => {
      return this.user.pipe(map(v => !!v))
    }))
  }

  async signUp({ username, password, email }: SignUpArg) {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        }
      });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }
  async confirmSignUp({ username, code }: ConfirmSignUpArg) {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  async signIn({ username, password }: SignInArg) {
    try {
      const cognitoUser: CognitoUser = await Auth.signIn(username, password);
      console.log("sign in")
      await this.setUserFromCognitoUser(cognitoUser);
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  async resendConfirmationCode({ username }: ResendConfirmationCodeArg) {
    try {
      await Auth.resendSignUp(username);
      console.log('code resent successfully');
    } catch (err) {
      console.log('error resending code: ', err);
    }
  }

  async signOut() {
    this.user.next(null)
    console.log("sign out")
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
}
