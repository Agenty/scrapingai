import Api from "../api";
import { List } from "./types";
declare class Lists {
    private api;
    constructor(api: Api);
    list(params?: any): Promise<List[]>;
    get(list_id: number): Promise<List>;
    create(data: List): Promise<List>;
    update(list_id: number, data: List): Promise<any>;
    delete(list_id: number): Promise<string>;
}
declare class ListRows {
    private api;
    constructor(api: Api);
    list(list_id: number): Promise<any[]>;
    get(list_id: number, row_id: string): Promise<any>;
    create(list_id: number, payload: any): Promise<any>;
    update(list_id: number, row_id: string, data: any): Promise<any>;
    delete(list_id: number, row_id: string): Promise<any>;
    clear(list_id: number): Promise<any>;
}
export { Lists, ListRows };
