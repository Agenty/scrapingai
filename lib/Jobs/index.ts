import { Paged } from "../../models/paged";
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

  async list(paged?: Paged): Promise<Job[]> {
    return this.api.get(`/jobs`, paged);
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