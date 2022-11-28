import { IFeedback } from '@components/api/types/IFeedback';
import { AxiosInstance, AxiosResponse } from 'axios';

interface FeedbackBody
{
  title : string;
  body : string;
}

interface AllFeedbacksBody
{
  lastRead: string,
  items: IFeedback[]
}


class Feedback {
  private axiosInstance: AxiosInstance;
  
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async likeFeedback(id: number): Promise<AxiosResponse> {
    return await this.axiosInstance.put(`/feedback/threads/${id}`, {liked: true});
  }

  async unlikeFeedback(id: number): Promise<AxiosResponse> {
    return await this.axiosInstance.put(`/feedback/threads/${id}`, {liked: false});
  }

  async deleteFeedback(id: number): Promise<AxiosResponse> {
    return await this.axiosInstance.delete(`/feedback/threads/${id}`);
  }

  async modifyFeedback(id: number, body: FeedbackBody): Promise<AxiosResponse> {
    return await this.axiosInstance.patch(`/feedback/threads/${id}`, body);
  }

  async getFeedbacks(): Promise<Array<IFeedback>> {
    const feedbacks : AllFeedbacksBody = (await this.axiosInstance.get('/feedback/threads')).data.data;
    return feedbacks.items;
  };
  
  async getUserFeedbacks(): Promise<IFeedback[]> {
    const feedbacks = (await this.axiosInstance.get('/feedback/threads/my')).data.data.threads;
    return feedbacks;
  }

  async sendFeedback(body: FeedbackBody): Promise<AxiosResponse> {
    return await this.axiosInstance.post('/feedback/threads', body);
  }
}

export { Feedback };
