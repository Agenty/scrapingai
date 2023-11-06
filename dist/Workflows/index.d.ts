import Api from "../api";
import { Workflow } from "./types";
declare class Workflows {
    private api;
    constructor(api: Api);
    get(workflow_id: string): Promise<Workflow>;
    list(): Promise<Workflow[]>;
    create(data: Workflow): Promise<Workflow>;
    update(workflow_id: string, data: Workflow): Promise<Workflow>;
    delete(workflow_id: string): Promise<string>;
    isEnabled(workflow_id: string, data: any): Promise<string>;
}
export default Workflows;
