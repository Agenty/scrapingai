import Api from "./Api";

class Workflows {
    private api: Api;
    constructor(api: Api) {
        this.api = api;
    }

    async create(data: any): Promise<any> {
        return this.api.post(`/workflows`, data);
    }

    async list(): Promise<any[]> {
        return this.api.get(`/workflows`);
    }

    async get(workflow_id: string): Promise<any> {
        return this.api.get(`/workflows/${workflow_id}`);
    }

    async update(workflow_id: string, data: any): Promise<any> {
        return this.api.get(`/workflows/${workflow_id}`, data);
    }

    async delete(workflow_id: string): Promise<any> {
        return this.api.get(`/workflows/${workflow_id}`);
    }
}

export default Workflows;