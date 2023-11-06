import Api from "../api";
import { Agent } from "./types";
declare class ScrapingAgents {
    private api;
    constructor(api: Api);
    get(agent_id: string): Promise<Agent>;
    list(): Promise<Agent[]>;
    create(data: Agent): Promise<Agent>;
    update(agent_id: string, data: Agent): Promise<Agent>;
    delete(agent_id: string): Promise<string>;
}
declare class CrawlingAgents {
    private api;
    constructor(api: Api);
    get(agent_id: string): Promise<Agent>;
    list(): Promise<Agent[]>;
    create(data: Agent): Promise<Agent>;
    update(agent_id: string, data: Agent): Promise<Agent>;
    delete(agent_id: string): Promise<string>;
}
declare class ChangeDetectionAgents {
    private api;
    constructor(api: Api);
    get(agent_id: string): Promise<Agent>;
    list(): Promise<Agent[]>;
    create(data: Agent): Promise<Agent>;
    update(agent_id: string, data: Agent): Promise<Agent>;
    delete(agent_id: string): Promise<string>;
}
export { ScrapingAgents, CrawlingAgents, ChangeDetectionAgents };
