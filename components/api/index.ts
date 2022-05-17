import CurrentUser from '@components/api/currentUser';
import Issue from '@components/api/issue';

class TransportLayer {
  public currentUser: CurrentUser;
  public issues: Issue;

  constructor() {
    this.currentUser = new CurrentUser()
    this.issues = new Issue()
  }
}

export default TransportLayer
