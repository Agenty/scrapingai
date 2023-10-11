import Api from "./Api";
import Jobs from "./Jobs";
import { Lists, ListRows } from "./Lists";
import Users from "./Users";


class Agenty {

  private api: Api;
  public jobs: Jobs;
  public lists: Lists;
  public listRows: ListRows;
  public users: Users;

  constructor(apiKey: string) {
    this.api = new Api(apiKey);
    this.jobs = new Jobs(this.api);
    this.lists = new Lists(this.api);
    this.listRows = new ListRows(this.api);
    this.users = new Users(this.api);
  }
}

export default Agenty;