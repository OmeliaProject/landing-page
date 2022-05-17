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
        title: "Minuteur ne marche pas après 20 min",
        body: "J’ai une présentation de 25 minutes à préparer mais je ne peux pas sélectionner un minuteur de plus de 20 minutes.",
        likes: 0,
        hasLiked: false
      },
      {
        id: 2,
        timestamp: Date.now(),
        email: "mathias@w;dwa",
        title: "Page de connexion ne fonctionne pas avec google",
        body: "Lorsque j’essaie de me connecter avec google, l’application se ferme.",
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
