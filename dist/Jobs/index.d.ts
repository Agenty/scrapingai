import Api from "../api";
import { Job } from "./types";
declare class Jobs {
    private api;
    constructor(api: Api);
    get(job_id: number): Promise<Job>;
    list(params?: any): Promise<Job[]>;
    start(agent_id: string): Promise<Job>;
    stop(job_id: number): Promise<Job>;
    result(job_id: number): Promise<Job[]>;
}
export default Jobs;
