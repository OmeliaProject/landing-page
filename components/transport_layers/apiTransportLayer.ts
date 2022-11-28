import axios, { AxiosInstance } from 'axios';

import CurrentUser from '@components/api/User';
import {Feedback} from '@components/api/Feedback';
import CurrentUserStore from '@stores/currentUser';

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";

if (API_URL == "" || API_KEY == "") {
  throw new Error('API Env is not set');
}

class ApiTransportLayer {

  public static defaultOptions = {
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
      "Accept" : "application/json",
      "x-api-key": API_KEY,
    },
  };

  public currentUser: CurrentUser;
  public feedbacks: Feedback;
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create(ApiTransportLayer.defaultOptions);
    
    this.currentUser = new CurrentUser(this.axiosInstance)
    this.feedbacks = new Feedback(this.axiosInstance)
  
    this.axiosInstance.interceptors.request.use((config) => {
      return ({
        ...config,
        headers: {
          ...config.headers,
          ...CurrentUserStore.authenticationTokenHeaders,
        },
      })
    })
  
  }

}

export {
  ApiTransportLayer,
} 
