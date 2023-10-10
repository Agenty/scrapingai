import Api from "./Api";
import Jobs from "./Jobs";
import { Lists, ListRows } from "./Lists";


class Agenty {

  private api: Api;
  public jobs: Jobs;
  public lists: Lists;
  public listRows: ListRows;

  constructor(apiKey: string) {
    this.api = new Api(apiKey);
    this.jobs = new Jobs(this.api);
    this.lists = new Lists(this.api);
    this.listRows = new ListRows(this.api);
  }
}

export default Agenty;