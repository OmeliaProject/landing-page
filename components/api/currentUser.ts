import CurrentUserStore from '@stores/currentUser';

export interface SignInBody {
  email: string,
  password: string,
}

export interface SignUpBody {
  firstname: string,
  lastname: string,
  password: string,
  email: string,
}

export interface EmailVerificationCodeBody {
  email: string,
}

export interface VerifyEmailBody {
  email: string,
  code: string,
}

export interface ChangePasswordBody {
  email: string,
  code: string,
  newPassword: string,
}

export interface requestResetPasswordCodeBody {
  email: string,
}

export interface ResetPasswordBody {
  email: string,
  code: string,
  newPassword: string,
}

export interface ExternalServicesQueryParams {
  redirectUrl: string,
  state: string,
}

class CurrentUser {
  constructor() {
  }

  delay = async(ms : number) => new Promise(resolve => setTimeout(resolve, ms))

  async signIn(body: SignInBody): Promise<void> {
    await this.delay(1000);

    //do some call api
    CurrentUserStore.setTokens({
      accessToken: 'leToken',
      refreshToken: 'leRefreshToken',
      expiresIn: 10,
    })
  }

  async signUp(body: SignUpBody): Promise<void> {
    await this.delay(1000);
  }


}

export default CurrentUser
