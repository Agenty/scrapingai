import { Paged } from "../models/paged";
import Api from "./Api";

class Jobs {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async list(paged?: Paged): Promise<any[]> {
    return this.api.get(`/jobs`, paged);
  }

  async start(agent_id: string): Promise<any> {
    return this.api.post(`/jobs/start`, { agent_id });
  }

  async stop(job_id: number): Promise<any> {
    return this.api.get(`/jobs/${job_id}/stop`);
  }

  async get(job_id: number): Promise<any> {
    return this.api.get(`/jobs/${job_id}`);
  }

}

export default Jobs;