export type Workflow = {
    workflow_id?: string;
    account_id?: number;
    user_id?: number;
    agents: WorkflowAgents;
    name: string;
    trigger?: WorkflowTrigger;
    actions?: Array<WorkflowAction>;
    is_enabled?: boolean;
    created_at?: Date;
    updated_at?: Date;
}

type WorkflowAgents = {
    all?: boolean,
    selected?: string[];
}

type WorkflowTrigger = {
    when: string[];
}

type WorkflowAction = {
    type: string;
    connection_id?: string;
    config?: Record<string, any>;
}