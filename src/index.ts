import {
  ChangeDetectionAgents,
  CrawlingAgents,
  ScrapingAgents,
} from "./Agents";
import Api from "./api";
import Jobs from "./Jobs";
import { Lists, ListRows } from "./Lists";
import { Projects, ProjectAgents } from "./Projects";
import Schedulers from "./Schedulers";
import Users from "./Users";
import Workflows from "./Workflows";

class Agenty {
  private api: Api;
  public jobs: Jobs;
  public lists: Lists;
  public listRows: ListRows;
  public users: Users;
  public workflows: Workflows;
  public schedulers: Schedulers;
  public scrapingAgents: ScrapingAgents;
  public crawlingAgents: CrawlingAgents;
  public changeDetectionAgents: ChangeDetectionAgents;
  public projects: Projects;
  public projectAgents: ProjectAgents;

  constructor(apiKey: string) {
    this.api = new Api(apiKey);
    this.jobs = new Jobs(this.api);
    this.lists = new Lists(this.api);
    this.listRows = new ListRows(this.api);
    this.users = new Users(this.api);
    this.workflows = new Workflows(this.api);
    this.schedulers = new Schedulers(this.api);
    this.scrapingAgents = new ScrapingAgents(this.api);
    this.crawlingAgents = new CrawlingAgents(this.api);
    this.changeDetectionAgents = new ChangeDetectionAgents(this.api);
    this.projects = new Projects(this.api);
    this.projectAgents = new ProjectAgents(this.api);
  }
}

export default Agenty;
