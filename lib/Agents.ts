import Api from "./Api";

class ScrapingAgents {
    private api: Api;
    constructor(api: Api) {
        this.api = api;
    }

    async create(data: any): Promise<any> {
        return this.api.post(`/agents`, data);
    }

    async list(): Promise<any> {
        return this.api.get(`/agents`);
    }

    async get(agent_id: string): Promise<any> {
        return this.api.get(`/agents/${agent_id}`);
    }

    async update(agent_id: string, data: any): Promise<any> {
        return this.api.put(`/agents/${agent_id}`, data);
    }

    async delete(agent_id: string): Promise<any> {
        return this.api.delete(`/agents/${agent_id}`);
    }
}


class CrawlingAgents {
    private api: Api;
    constructor(api: Api) {
        this.api = api;
    }

    async create(data: any): Promise<any> {
        return this.api.post(`/agents`, data);
    }

    async list(): Promise<any> {
        return this.api.get(`/agents`);
    }

    async get(agent_id: string): Promise<any> {
        return this.api.get(`/agents/${agent_id}`);
    }

    async update(agent_id: string, data: any): Promise<any> {
        return this.api.put(`/agents/${agent_id}`, data);
    }

    async delete(agent_id: string): Promise<any> {
        return this.api.delete(`/agents/${agent_id}`);
    }
}


class ChangeDetectionAgents {
    private api: Api;
    constructor(api: Api) {
        this.api = api;
    }

    async create(data: any): Promise<any> {
        return this.api.post(`/agents`, data);
    }

    async list(): Promise<any> {
        return this.api.get(`/agents`);
    }

    async get(agent_id: string): Promise<any> {
        return this.api.get(`/agents/${agent_id}`);
    }

    async update(agent_id: string, data: any): Promise<any> {
        return this.api.put(`/agents/${agent_id}`, data);
    }

    async delete(agent_id: string): Promise<any> {
        return this.api.delete(`/agents/${agent_id}`);
    }
}

export {
    ScrapingAgents,
    CrawlingAgents,
    ChangeDetectionAgents
};