
import Api from "../api";
import { Agent } from "./types";

class ScrapingAgents {
    private api: Api;
    constructor(api: Api) {
        this.api = api;
    }

    async get(agent_id: string): Promise<Agent> {
        return this.api.get(`/agents/${agent_id}`);
    }

    async list(): Promise<Agent[]> {
        return this.api.get(`/agents`);
    }

    async create(data: Agent): Promise<Agent> {
        return this.api.post(`/agents`, data);
    }

    async update(agent_id: string, data: Agent): Promise<Agent> {
        return this.api.put(`/agents/${agent_id}`, data);
    }

    async delete(agent_id: string): Promise<string> {
        return this.api.delete(`/agents/${agent_id}`);
    }
}

class CrawlingAgents {
    private api: Api;
    constructor(api: Api) {
        this.api = api;
    }

    async get(agent_id: string): Promise<Agent> {
        return this.api.get(`/agents/${agent_id}`);
    }

    async list(): Promise<Agent[]> {
        return this.api.get(`/agents`);
    }

    async create(data: Agent): Promise<Agent> {
        return this.api.post(`/agents`, data);
    }

    async update(agent_id: string, data: Agent): Promise<Agent> {
        return this.api.put(`/agents/${agent_id}`, data);
    }

    async delete(agent_id: string): Promise<string> {
        return this.api.delete(`/agents/${agent_id}`);
    }
}

class ChangeDetectionAgents {
    private api: Api;
    constructor(api: Api) {
        this.api = api;
    }

    async get(agent_id: string): Promise<Agent> {
        return this.api.get(`/agents/${agent_id}`);
    }

    async list(): Promise<Agent[]> {
        return this.api.get(`/agents`);
    }

    async create(data: Agent): Promise<Agent> {
        return this.api.post(`/agents`, data);
    }

    async update(agent_id: string, data: Agent): Promise<Agent> {
        return this.api.put(`/agents/${agent_id}`, data);
    }

    async delete(agent_id: string): Promise<string> {
        return this.api.delete(`/agents/${agent_id}`);
    }
}

export {
    ScrapingAgents,
    CrawlingAgents,
    ChangeDetectionAgents
};