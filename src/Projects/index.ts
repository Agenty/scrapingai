import Api from "../api";
import { Project } from "./types";

class Projects {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async get(project_id: number): Promise<Project> {
    return this.api.get(`/projects/${project_id}`);
  }

  async list(params: any = undefined): Promise<Project> {
    return this.api.get(`/projects`, params);
  }

  async create(project: Project): Promise<Project> {
    return this.api.post(`/projects`, project);
  }

  async update(project_id: number, project: Project): Promise<Project> {
    return this.api.put(`/projects/${project_id}`, project);
  }

  async delete(project_id: number): Promise<string> {
    return this.api.delete(`/projects?id=${project_id}`);
  }
}

class ProjectAgents {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async create(project_id: number, agents: any): Promise<any> {
    return this.api.post(`/projects/${project_id}/add`, agents);
  }

  async delete(project_id: number, agent_id: string): Promise<any> {
    return this.api.delete(
      `/projects/${project_id}/remove?agent_id=${agent_id}`
    );
  }
}

export { Projects, ProjectAgents };
