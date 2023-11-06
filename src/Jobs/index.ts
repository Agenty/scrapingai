import Api from "../api";
import { Job } from "./types";

class Jobs {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async get(job_id: number): Promise<Job> {
    return this.api.get(`/jobs/${job_id}`);
  }

  async list(params: any = undefined): Promise<Job[]> {
    return this.api.get(`/jobs`, params);
  }

  async start(agent_id: string): Promise<Job> {
    return this.api.post(`/jobs/start`, { agent_id });
  }

  async stop(job_id: number): Promise<Job> {
    return this.api.get(`/jobs/${job_id}/stop`);
  }

  async result(job_id: number): Promise<Job[]> {
    return this.api.get(`/jobs/${job_id}/result`);
  }
}

export default Jobs;
