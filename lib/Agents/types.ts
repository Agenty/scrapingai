import Scheduler from "../Schedulers";

export type Agent = {
    agent_id?: string;
    account_id?: number;
    user_id?: number;
    project_id?: number;
    name: string;
    description?: string;
    type: string;
    tags?: string[];
    version?: number;
    config: Record<string, any>;
    is_public?: boolean;
    is_managed?: boolean;
    icon?: string;
    scheduler?: Scheduler;
    scripts?: string;
    input?: Record<string, any>;
    created_at?: Date;
    updated_at?: Date;
}


