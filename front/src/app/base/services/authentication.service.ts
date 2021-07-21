import { promisify } from 'util';
import { Injectable } from '@angular/core';
import { CognitoUser } from '@aws-amplify/auth';
import { Auth, DataStore } from 'aws-amplify';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

type SignUpArg = { username: string; password: string; email: string };
type ConfirmSignUpArg = { username: string; code: string };
type SignInArg = { username: string; password: string };
type ResendConfirmationCodeArg = { username: string };

type User = {
  sub: string;
  username: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user = new BehaviorSubject<User | null>(null);

  constructor() {
    this.initializeResult = Auth.currentAuthenticatedUser()
      .then(async (v) => {
        await this.setUserFromCognitoUser(v);
      })
      .catch(() => {});
  }

  initializeResult: Promise<void>;

  async setUserFromCognitoUser(cognitoUser: CognitoUser) {
    const sub = (await promisify(cognitoUser.getUserAttributes.bind(cognitoUser))())?.find((_) => _.Name === 'sub')
      ?.Value;
    if (sub == null) {
      throw Error('sub not found');
    }
    this.user.next({
      sub,
      username: cognitoUser.getUsername(),
    });
  }

  get isSignedIn(): Observable<boolean> {
    return from(this.initializeResult).pipe(
      mergeMap(() => {
        return this.user.pipe(map((v) => !!v));
      })
    );
  }

  async signUp({ username, password, email }: SignUpArg): Promise<void> {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }
  async confirmSignUp({ username, code }: ConfirmSignUpArg): Promise<void> {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  async signIn({ username, password }: SignInArg): Promise<void> {
    const cognitoUser: CognitoUser = await Auth.signIn(username, password);
    console.log('sign in');
    await this.setUserFromCognitoUser(cognitoUser);
    DataStore.clear();
  }

  async resendConfirmationCode({ username }: ResendConfirmationCodeArg): Promise<void> {
    try {
      await Auth.resendSignUp(username);
      console.log('code resent successfully');
    } catch (err) {
      console.log('error resending code: ', err);
    }
  }

  async signOut(): Promise<void> {
    this.user.next(null);
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
}
