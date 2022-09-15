import axios, { AxiosInstance } from 'axios';

import CurrentUser from '@components/api/currentUser';
import {Feedback} from '@components/api/feedback';
import CurrentUserStore from '@stores/currentUser';


const API_URL = "https://as38vz90ld.execute-api.eu-west-3.amazonaws.com/dev"
const API_KEY = "XpWReSfxNI6ZBgNLBkNPP67S6ib71RIv2NBNCR0L"

class TransportLayer {

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
    this.axiosInstance = axios.create(TransportLayer.defaultOptions);
    
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

export default TransportLayer
