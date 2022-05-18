import CurrentUserStore from '@stores/currentUser';
import { IIssue } from '@components/api/types/IIssue';
import { AxiosInstance } from 'axios';


interface IssueBody
{
  title : string;
  body : string;
}

class Issue {
  private axiosInstance: AxiosInstance;
  private bddIssues : Array<IIssue> = [
    {
      id: 1,
      timestamp: Date.now(),
      email: "jean@gmail.com",
      title: "Minuteur ne marche pas après 20 min",
      body: "J’ai une présentation de 25 minutes à préparer mais je ne peux pas sélectionner un minuteur de plus de 20 minutes.",
      likes: 0,
      hasLiked: false
    },
    {
      id: 2,
      timestamp: Date.now(),
      email: "jean@gmail.com",
      title: "Page de connexion ne fonctionne pas avec google",
      body: "Lorsque j’essaie de me connecter avec google, l’application se ferme.",
      likes: 0,
      hasLiked: false
    },
  ]
  
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  delay = async(ms : number) => new Promise(resolve => setTimeout(resolve, ms))

  async likeIssue(id: number): Promise<void> {
    return new Promise(async (resolve, reject) => {
      await this.delay(1000);

      const issue = this.bddIssues.find(issue => issue.id === id);

      if (issue) {
        issue.likes++;
        issue.hasLiked = true;
      }

      resolve();
    })
  }

  async deleteIssue(id: number): Promise<void> {
    await this.delay(1000);
  }

  async modifyIssue(id: number, body: IssueBody): Promise<void> {
    await this.delay(1000);
  }

  async getIssues(): Promise<Array<IIssue>> {
    await this.delay(1000);

    return this.bddIssues;
  };

  async sendIssue(body: IssueBody): Promise<string | null> {
    await this.delay(1000);

    if (CurrentUserStore.user) {
      this.bddIssues.push({
        id: this.bddIssues.length + 1,
        timestamp: Date.now(),
        email: CurrentUserStore.user?.email,
        title: body.title,
        body: body.body,
        likes: 0,
        hasLiked: false
      })

    }

    return "succeed";
  }
}

export default Issue
