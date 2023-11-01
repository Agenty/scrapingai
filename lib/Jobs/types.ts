export type Job = {
    job_id?: number;
    account_id: number;
    agent_id: string;
    type: string;
    status: string;
    priority: number;
    pages_total?: number;
    pages_processed?: number;
    pages_succeeded?: number;
    pages_failed?: number;
    pages_credit?: number;
    created_at?: Date;
    started_at?: Date;
    completed_at?: Date;
    stopped_at?: Date;
    is_scheduled?: boolean;
    queue_time?: string;
    run_duration?: string;
    error?: string;

}

