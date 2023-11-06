import Api from "../api";
import { User } from "./types";

class Users {
  private api: Api;
  constructor(api: Api) {
    this.api = api;
  }

  async get(user_id: number): Promise<User> {
    return this.api.get(`/users/${user_id}`);
  }

  async list(): Promise<User[]> {
    return this.api.get(`/users`);
  }

  async create(data: User): Promise<User> {
    return this.api.post(`/users`, data);
  }

  async update(user_id: number, data: User): Promise<User> {
    return this.api.put(`/users/${user_id}`, data);
  }

  async delete(user_id: number): Promise<string> {
    return this.api.delete(`/users?user_id=${user_id}`);
  }
}

export default Users;
