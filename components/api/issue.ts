import CurrentUserStore from '@stores/currentUser';
import { IIssue } from '@types/IIssue';

interface IssueBody
{
  title : string;
  body : string;
}

class Issue {
  constructor() {
  }

  delay = async(ms : number) => new Promise(resolve => setTimeout(resolve, ms))

  async getIssues(): Promise<Array<IIssue>> {
    await this.delay(1000);

    return [
      {
        id: 1,
        timestamp: Date.now(),
        email: "mathias@w;dwa",
        title: "Minuteur de marche pas après 20 min",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur....",
        likes: 0,
        hasLiked: false
      },
      {
        id: 2,
        timestamp: Date.now(),
        email: "mathias@w;dwa",
        title: "Page de connexion ne fonctionne pas avec twitter",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur....",
        likes: 0,
        hasLiked: false
      },
    ]
  };

  async sendIssue(body: IssueBody): Promise<string | null> {
    await this.delay(1000);

    return 'uploaded';
  }
}

export default Issue
