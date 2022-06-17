import CurrentUserStore from '@stores/currentUser';
import { IIssue } from '@components/api/types/IIssue';
import axios, { AxiosInstance } from 'axios';


interface IssueBody
{
  title : string;
  body : string;
}

class Issue {
  private axiosInstance: AxiosInstance;
  
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async likeIssue(id: number): Promise<void> {
    return await this.axiosInstance.put(`/feedback/threads?id=${id}`, {liked: true});
  }

  async unlikeIssue(id: number): Promise<void> {
    return await this.axiosInstance.put(`/feedback/threads?id=${id}`, {liked: false});
  }

  async deleteIssue(id: number): Promise<void> {
    return await this.axiosInstance.delete(`/feedback/threads?id=${id}`);
  }

  async modifyIssue(id: number, body: IssueBody): Promise<void> {
    return await this.axiosInstance.patch(`/feedback/threads?id=${id}`, body);
  }

  async getIssues(): Promise<Array<IIssue>> {
    const issues = (await this.axiosInstance.get('/feedback/threads')).data.data;
    return issues;
  };

  async sendIssue(body: IssueBody): Promise<void> {
    return await this.axiosInstance.post('/feedback/threads', body);
  }
}

export default Issue
