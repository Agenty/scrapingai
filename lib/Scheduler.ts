import Api from "./Api";

class Scheduler {

    private api: Api;
    constructor(api: Api) {
        this.api = api;
    }

    async create(agent_id: string, data: any): Promise<any> {
        return this.api.post(`/scheduler/${agent_id}`, data);
    }

    async get(agent_id: string): Promise<any> {
        return this.api.get(`/scheduler/${agent_id}`);
    }

    async isEnabled(agent_id: string, data: any): Promise<any> {
        return this.api.patch(`/scheduler/${agent_id}`, data);
    }

    async delete(agent_id: string): Promise<any> {
        return this.api.delete(`/scheduler/${agent_id}`);
    }

}

export default Scheduler;