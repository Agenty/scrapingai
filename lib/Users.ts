import Api from "./Api";

class Users {
    private api: Api
    constructor(api: Api) {
        this.api = api;
    }

    async create(data: any): Promise<any> {
        return this.api.post(`/users`, data);
    }

    async get(user_id: number): Promise<any> {
        return this.api.get(`/users/${user_id}`);
    }

    async list(): Promise<any[]> {
        return this.api.get(`/users`);
    }

    async update(user_id: number, data: any): Promise<any> {
        return this.api.put(`/users/${user_id}`, data);
    }

    async delete(user_id: number): Promise<any> {
        return this.api.delete(`/users?user_id=${user_id}`);
    }

}

export default Users;