import Api from "../api";
import { User } from "./types";
declare class Users {
    private api;
    constructor(api: Api);
    get(user_id: number): Promise<User>;
    list(): Promise<User[]>;
    create(data: User): Promise<User>;
    update(user_id: number, data: User): Promise<User>;
    delete(user_id: number): Promise<string>;
}
export default Users;
