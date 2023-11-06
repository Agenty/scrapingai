import Api from "../api";
import { Project } from "./types";
declare class Projects {
    private api;
    constructor(api: Api);
    get(project_id: number): Promise<Project>;
    list(params?: any): Promise<Project>;
    create(project: Project): Promise<Project>;
    update(project_id: number, project: Project): Promise<Project>;
    delete(project_id: number): Promise<string>;
}
declare class ProjectAgents {
    private api;
    constructor(api: Api);
    create(project_id: number, agents: any): Promise<any>;
    delete(project_id: number, agent_id: string): Promise<any>;
}
export { Projects, ProjectAgents };
