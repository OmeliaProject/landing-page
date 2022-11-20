import CurrentUserStore, { CurrentUserInfos } from '@stores/currentUser';
import { AxiosInstance, AxiosResponse } from 'axios';
import currentUser, { CurrentUserTokens } from '@stores/currentUser';
import { PremiumState, PremiumStateType, UserWithPendingPremium } from './types/UserWithPendingPremium';

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

export interface ChangePasswordWithOldPasswordBody {
  currentPassword: string,
  newPassword: string
}

export interface ResetPasswordResponse {
  accessToken: string,
  refreshToken: string
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

export interface ChangeUserPremiumBody {
    email: string,
    response: PremiumStateType,
    adminComment: string
}
  

class User {

  private axiosInstance: AxiosInstance;


  constructor(AxiosInstance: AxiosInstance) {
    this.axiosInstance = AxiosInstance;
  }

  delay = async(ms : number) => new Promise(resolve => setTimeout(resolve, ms))

  isSignedIn(): boolean {
    return CurrentUserStore.tokens !== null;
  }

  async inviteToIosBeta(): Promise<void> {
    // fake api call
    await this.delay(1000);
  }

  async signIn(body: SignInBody): Promise<CurrentUserTokens> {
    let data : CurrentUserTokens = (await this.axiosInstance.post('/auth/token', body)).data.data;
    CurrentUserStore.setTokens(data);
    return data;
  }


  async changeUserPremiumState(body : ChangeUserPremiumBody): Promise<AxiosResponse> {
    return await this.axiosInstance.put(`/users/premium`, body);
  }

  async getUsersWithPendingPremium(): Promise<UserWithPendingPremium[]> {
    return (await this.axiosInstance.get('/users/premium')).data.data;
  } 

  async getUserInfos(): Promise<CurrentUserInfos> {
    if (currentUser.user !== null)
      return currentUser.user;
    
    if (currentUser.tokens === null)
      return Promise.reject('No token stored');

    let axiosResponse : AxiosResponse<CurrentUserInfos> = (await this.axiosInstance.get('/users/me')).data;

    CurrentUserStore.setUser(axiosResponse.data);
    return axiosResponse.data;
  }

  async changePassword(body: ChangePasswordBody): Promise<AxiosResponse> {
    return await this.axiosInstance.put('/auth/password', body);
  }

  async changePasswordWithOldPassword(body: ChangePasswordWithOldPasswordBody): Promise<ResetPasswordResponse> {
    let tokens : AxiosResponse<ResetPasswordResponse> = (await this.axiosInstance.patch('/auth/password', body)).data;
    CurrentUserStore.setTokens(tokens.data as CurrentUserTokens);
    return tokens.data;
  }

  async confirmPasswordCreation(body: EmailVerificationCodeBody): Promise<AxiosResponse> {
    return await this.axiosInstance.put('/auth/email', body);
  }

  async forgetPassword(body: requestResetPasswordCodeBody): Promise<AxiosResponse> {
    return await this.axiosInstance.post('/auth/password', body);
  }

  async signUp(body: SignUpBody): Promise<AxiosResponse> {
    return this.axiosInstance.post('/users', body);
  }

  async deleteAccount() : Promise<AxiosResponse> {
    let response : AxiosResponse = await this.axiosInstance.delete('/users');
    CurrentUserStore.clear();
    return response;
  }
  
  signOut(): void {
    CurrentUserStore.clear();
  }

  clearAllUserData(): void {
    if (CurrentUserStore.tokens !== null) {
      CurrentUserStore.setTokens(null);
    }
    if (CurrentUserStore.user !== null) {
      CurrentUserStore.setUser(null);
    }
  }
}

export default User
