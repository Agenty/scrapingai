import { ChangeDetectionAgents, CrawlingAgents, ScrapingAgents } from "./Agents";
import Jobs from "./Jobs";
import { Lists, ListRows } from "./Lists";
import { Projects, ProjectAgents } from "./Projects";
import Schedulers from "./Schedulers";
import Users from "./Users";
import Workflows from "./Workflows";
import Browser from "./browser";
declare class Agenty {
    private api;
    jobs: Jobs;
    lists: Lists;
    listRows: ListRows;
    users: Users;
    workflows: Workflows;
    schedulers: Schedulers;
    scrapingAgents: ScrapingAgents;
    crawlingAgents: CrawlingAgents;
    changeDetectionAgents: ChangeDetectionAgents;
    projects: Projects;
    projectAgents: ProjectAgents;
    browser: Browser;
    constructor(apiKey: string);
}
export default Agenty;
