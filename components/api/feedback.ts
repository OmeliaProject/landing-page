import CurrentUserStore from '@stores/currentUser';
import { IFeedback } from '@components/api/types/IFeedback';
import axios, { AxiosInstance } from 'axios';
import { collectStoredAnnotations } from 'mobx/dist/internal';


interface FeedbackBody
{
  title : string;
  body : string;
}

class Feedback {
  private axiosInstance: AxiosInstance;
  
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async likeFeedback(id: number): Promise<void> {
    return await this.axiosInstance.put(`/feedback/threads?id=${id}`, {liked: true});
  }

  async unlikeFeedback(id: number): Promise<void> {
    return await this.axiosInstance.put(`/feedback/threads?id=${id}`, {liked: false});
  }

  async deleteFeedback(id: number): Promise<void> {
    return await this.axiosInstance.delete(`/feedback/threads?id=${id}`);
  }

  async modifyFeedback(id: number, body: FeedbackBody): Promise<void> {
    return await this.axiosInstance.patch(`/feedback/threads?id=${id}`, body);
  }

  async getFeedbacks(): Promise<Array<IFeedback>> {
    const feedbacks = (await this.axiosInstance.get('/feedback/threads')).data.data.threads;
    return feedbacks;
  };
  
  async getUserFeedbacks(): Promise<IFeedback[]> {
    const feedbacks = (await this.axiosInstance.get('/feedback/threads/me')).data.data.threads;
    return feedbacks;
  }

  async sendFeedback(body: FeedbackBody): Promise<void> {
    return await this.axiosInstance.post('/feedback/threads', body);
  }
}

export { Feedback };
