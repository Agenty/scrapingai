import Api from "../api";
import { Workflow } from "./types";

class Workflows {
    private api: Api;
    constructor(api: Api) {
        this.api = api;
    }

    async get(workflow_id: string): Promise<Workflow> {
        return this.api.get(`/workflows/${workflow_id}`);
    }

    async list(): Promise<Workflow[]> {
        return this.api.get(`/workflows`);
    }

    async create(data: Workflow): Promise<Workflow> {
        return this.api.post(`/workflows`, data);
    }

    async update(workflow_id: string, data: Workflow): Promise<Workflow> {
        return this.api.put(`/workflows/${workflow_id}`, data);
    }

    async delete(workflow_id: string): Promise<string> {
        return this.api.delete(`/workflows/${workflow_id}`);
    }

    async isEnabled(workflow_id: string, data: any): Promise<string> {
        return this.api.patch(`/workflows/${workflow_id}`, data);
    }

}

export default Workflows;