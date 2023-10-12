// import ScrapingAgents from "./Agents";
import Api from "./Api";
import Jobs from "./Jobs";
import { Lists, ListRows } from "./Lists";
import Scheduler from "./Scheduler";
import Users from "./Users";
import Workflows from "./Workflows";


class Agenty {

  private api: Api;
  public jobs: Jobs;
  public lists: Lists;
  public listRows: ListRows;
  public users: Users;
  public workflows: Workflows;
  public scheduler: Scheduler;
  // public scrapingAgents: ScrapingAgents;

  constructor(apiKey: string) {
    this.api = new Api(apiKey);
    this.jobs = new Jobs(this.api);
    this.lists = new Lists(this.api);
    this.listRows = new ListRows(this.api);
    this.users = new Users(this.api);
    this.workflows = new Workflows(this.api);
    this.scheduler = new Scheduler(this.api);
    // this.scrapingAgents = new ScrapingAgents(this.api);
  }
}

export default Agenty;