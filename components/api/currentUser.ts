import CurrentUserStore, { CurrentUserInfos } from '@stores/currentUser';
import { AxiosInstance, AxiosResponse } from 'axios';
import { CurrentUserTokens } from '@stores/currentUser';

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
  code: string,
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

  private axiosInstance: AxiosInstance;


  constructor(AxiosInstance: AxiosInstance) {
    this.axiosInstance = AxiosInstance;
  }

  delay = async(ms : number) => new Promise(resolve => setTimeout(resolve, ms))

  isUserSignedIn(): boolean {
    return CurrentUserStore.tokens !== null;
  }

  async signIn(body: SignInBody): Promise<CurrentUserTokens> {
    let data : CurrentUserTokens = (await this.axiosInstance.post('/auth/token', body)).data.data;
    CurrentUserStore.setTokens(data);
    return data;
  }

  async getUserInfos(): Promise<CurrentUserInfos> {
    let axiosResponse : AxiosResponse<CurrentUserInfos> = await this.axiosInstance.get('/users/me');
    CurrentUserStore.setUser(axiosResponse.data);
    return axiosResponse.data;
  }

  async confirmPasswordCreation(body: EmailVerificationCodeBody): Promise<void> {
    await this.axiosInstance.put('/auth/email', body);
  }

  async signUp(body: SignUpBody): Promise<void> {
    return this.axiosInstance.post('/users', body);
  }

  signOut(): void {
    CurrentUserStore.setTokens(null);
    CurrentUserStore.setUser(null);
  } 


}

export default CurrentUser
