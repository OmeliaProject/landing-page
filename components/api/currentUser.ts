import CurrentUserStore, { CurrentUserInfos } from '@stores/currentUser';
import { Axios, AxiosInstance, AxiosRequestHeaders } from 'axios';
import { UserInfo } from 'os';

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
  
  private usersBdd : Array<CurrentUserInfos> = new Array<CurrentUserInfos>();


  constructor(AxiosInstance: AxiosInstance) {
    this.axiosInstance = AxiosInstance;
  }

  delay = async(ms : number) => new Promise(resolve => setTimeout(resolve, ms))

  isUserSignedIn(): boolean {
    return CurrentUserStore.tokens !== null;
  }

  async signIn(body: SignInBody): Promise<void> {
    return new Promise(async (resolve, reject) => {
      await this.delay(500);
      


      // check if user exists
      const user = this.usersBdd.find(user => user.email === body.email);
      
      if (!user)
        reject('User not found');
  
      //do some call api
      CurrentUserStore.setTokens({
        accessToken: 'leToken',
        refreshToken: 'leRefreshToken',
        expiresIn: 10,
      })
  
      let data = await this.getUserInfos();
  
      CurrentUserStore.setUser({
        firstname: data.firstname,
        lastname: data.lastname,
        email: body.email
      })
      resolve();
    
    })


  }

  async getUserInfos(): Promise<CurrentUserInfos> {
    await this.delay(1000);
    return {
      firstname: 'Mathias',
      lastname: 'Vigier',
      email: 'math.vgr@gmail.com',
    }
  }

  async confirmPasswordCreation(body: EmailVerificationCodeBody): Promise<void> {
    await this.delay(1000);
  }

  async signUp(body: SignUpBody): Promise<void> {
    
    // fake promise with accept
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.usersBdd.push(body);
        resolve();
      }, 1000);
    });

  }

  signOut(): void {
    this.usersBdd = this.usersBdd.filter(user => user.email !== CurrentUserStore?.user?.email);
    
    CurrentUserStore.setTokens(null);
    CurrentUserStore.setUser(null);


  } 


}

export default CurrentUser
