import Api from "../api";

class Scheduler {

    private api: Api;
    constructor(api: Api) {
        this.api = api;
    }

    async get(agent_id: string): Promise<Scheduler> {
        return this.api.get(`/scheduler/${agent_id}`);
    }

    async create(agent_id: string, data: Scheduler): Promise<Scheduler> {
        return this.api.post(`/scheduler/${agent_id}`, data);
    }

    async isEnabled(agent_id: string, data: Scheduler): Promise<Scheduler> {
        return this.api.patch(`/scheduler/${agent_id}`, data);
    }

    async delete(agent_id: string): Promise<string> {
        return this.api.delete(`/scheduler/${agent_id}`);
    }

}

export default Scheduler;