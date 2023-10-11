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

    async create(data: any): Promise<any> {
        return this.api.post(`/lists`, data);
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

    async get(list_id: number, row_id: string): Promise<any> {
        return this.api.get(`/lists/${list_id}/rows/${row_id}`);
    }

    async create(list_id: number, payload: any): Promise<any> {
        return this.api.post(`/lists/${list_id}/rows`, payload);
    }

    async update(list_id: number, row_id: string, data: any): Promise<any> {
        return this.api.put(`/lists/${list_id}/rows/${row_id}`, data);
    }

    async delete(list_id: number, row_id: string): Promise<any> {
        return this.api.delete(`/lists/${list_id}/rows/${row_id}`);
    }

    async clear(list_id: number): Promise<any> {
        return this.api.delete(`/lists/${list_id}/rows/clear`);
    }

}

export {
    Lists,
    ListRows,
};