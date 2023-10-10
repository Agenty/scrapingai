import { Paged } from "../models/paged";
import Api from "./Api";

class Lists {
    private api: Api

    constructor(api: Api) {
        this.api = api;
    }

    async list(paged?: Paged): Promise<any[]> {
        return this.api.get(`/lists`, paged);
    }

    async get(list_id: number): Promise<any> {
        return this.api.get(`/lists/${list_id}`)
    }

    async create(payload: any): Promise<any> {
        return this.api.post(`/lists`, {
            ...payload
        });
    }

    async update(list_id: number, data: any) {
        return this.api.put(`/lists/${list_id}`, data);
    }

    async delete(list_id: number): Promise<string> {
        return this.api.delete(`/lists/${list_id}`);
    }

}

class ListRows {

    private api: Api

    constructor(api: Api) {
        this.api = api;
    }

    async list(list_id: number): Promise<any[]> {
        return this.api.get(`/lists/${list_id}/rows`);
    }

    async get(list_id: number, row_id: string) {
        return this.api.get(`/lists/${list_id}/rows/${row_id}`);
    }

    async create(list_id: number, payload: any) {
        return this.api.post(`/lists/${list_id}/rows`, payload);
    }

}

export {
    Lists,
    ListRows,
};