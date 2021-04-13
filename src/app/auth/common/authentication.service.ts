import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

type SignUpArg = { username: string, password: string, email: string };
type ConfirmSignUpArg = { username: string, code: string };
type SignInArg = { username: string, password: string };
type ResendConfirmationCodeArg = { username: string };


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

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
      const user = await Auth.signIn(username, password);
      return user;
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
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
}
