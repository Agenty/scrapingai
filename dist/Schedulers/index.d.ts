import Api from "../api";
import { Scheduler } from "./types";
declare class Schedulers {
    private api;
    constructor(api: Api);
    get(agent_id: string): Promise<Scheduler>;
    create(agent_id: string, data: Scheduler): Promise<Scheduler>;
    isEnabled(agent_id: string, data: Scheduler): Promise<Scheduler>;
    delete(agent_id: string): Promise<string>;
}
export default Schedulers;
