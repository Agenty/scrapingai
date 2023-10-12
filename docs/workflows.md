## Workflows

### Create a workflow
```js
    agenty.workflows.create({
        "agents": {
        "all": false,
        "selected": [
            "7hy654rfgt"
        ]
        },
        "name": "Workflow Demo",
        "trigger": {
            "when": [
                "job_completed",
                "job_error"
            ]
        },
        "actions": [
            {
                "type": "email",
                "config": {
                    "emails": "john.doe@agenty.com",
                    "attach_result": null
                }
            }
        ]
})
```
**Payload:**

| Name     | Type                              | Description                                   |
| -------- | --------------------------------- | --------------------------------------------- |
| agents*  | object (WorkflowAgents)           | Select the agent you want to create  workflow |
| name*    | string                            | Name of your workflow                         |
| trigger* | object (WorkflowTrigger)          | Mention the trigger                           |
| actions* | Array of objects (WorkflowAction) | Mention the action                            |

[For complete reference click here](https://agenty.com/docs/api#tag/Workflows/operation/WorkflowController_createWorkflow)
**Response:**
```json
{
  "agents": { "all": false, "selected": [ "7hy654rfgt" ] },
  "name": "Workflow Demo",
  "trigger": { "when": [ "job_completed", "job_error" ] },
  "actions": [ { "type": "email", "config": [Object] } ],
  "is_enabled": true,
  "user_id": 566,
  "account_id": 184,
  "_id": "65267d8733013demo2dbf0f2"
}
```

### Get workflows
```js
    agenty.workflows.list()
```

**Response:**
```json
{   "total": 8,
    "limit": 1000,
    "offset": 0,
    "returned": 8,
    "result": [
    {
            "account_id": 001,
            "user_id": 002,
            "agents": {
                "all": false,
                "selected": [
                    "7hy654rfgt"
                ]
            },
            "name": "Workflow Demo",
            "trigger": {
                "when": [
                    "job_completed"
                ]
            },
            "actions": [
                {
                    "type": "email",
                    "config": {
                        "emails": "john.doe@agenty.com",
                        "attach_result": true
                    }
                }
            ],
            "is_enabled": true,
            "created_at": "2023-06-19T07:34:13.744Z",
            "updated_at": "2023-06-20T08:40:54.047Z",
            "workflow_id": "65267d8733013demo2dbf0f2"
        },
    ...
    ]
}
```

### Get workflow by workflow_id
```js
    agenty.workflows.get("65267d8733013demo2dbf0f2")
```
**Parameter:**

| Name         | Type   | Description                 |
| ------------ | ------ | --------------------------- |
| workflow_id* | string | Get Workflow by workflow id |

**Response:**
```json
{
  "account_id": 001,
  "user_id": 002,
  "agents": { "all": false, "selected": [ "huhwk5t9ml" ] },
  "name": "Workflow Demo",
  "trigger": { "when": [ "job_completed" ] },
  "actions": [ { "type": "email", "config": [Object] } ],
  "is_enabled": true,
  "created_at": "2023-06-19T07:34:13.744Z",
  "updated_at": "2023-06-20T08:40:54.047Z",
  "workflow_id": "65267d8733013demo2dbf0f2"
}
```

### Update workflow by workflow_id
```js
    agenty.workflows.update("65267d8733013demo2dbf0f2", {
        "account_id": 001,
        "user_id": 002,
        "agents": {
            "all": false,
            "selected": [
                "huhwk5t9ml"
            ]
        },
        "name": "Workflow Demo Update",
        "trigger": {
            "when": [
                "job_completed",
                "job_error"
            ]
        },
        "actions": [
            {
                "type": "email",
                "config": {
                    "emails": "john.doe@agenty.com",
                    "attach_result": null
                }
            }
        ],
        "is_enabled": true,
        "created_at": "2023-06-19T07:34:13.744Z",
        "updated_at": "2023-10-11T11:22:47.532Z",
        "workflow_id": "65267d8733013demo2dbf0f2"
})
```

**Parameter:**

| Name         | Type   | Description                       |
| ------------ | ------ | --------------------------------- |
| workflow_id* | string | To update workflow by workflow_id |

**Payload:**

| Name     | Type                              | Description                                   |
| -------- | --------------------------------- | --------------------------------------------- |
| agents*  | object (WorkflowAgents)           | Select the agent you want to create  workflow |
| name*    | string                            | Name of your workflow                         |
| trigger* | object (WorkflowTrigger)          | Mention the trigger                           |
| actions* | Array of objects (WorkflowAction) | Mention the action                            |

[For complete reference click here](https://agenty.com/docs/api#tag/Workflows/operation/WorkflowController_updateWorkflowById)
**Response:**
```json
{
  "account_id": 184,
  "user_id": 566,
  "agents": { "all": false, "selected": [ "huhwk5t9ml" ] },
  "name": "Workflow Demo Update",
  "trigger": { "when": [ "job_completed", "job_error" ] },
  "actions": [ { "type": "email", "config": [Object] } ],
  "is_enabled": true,
  "created_at": "2023-10-11T10:48:39.603Z",
  "updated_at": "2023-10-11T11:22:47.532Z",
  "workflow_id": "65267d8733013demo2dbf0f2"
}
```

### Enable or disable a workflow
```js
    agenty.workflows.isEnabled("65267d8733013d46a2dbf0f2", {
        "is_enabled": true,
})
```

**Parameter:**

| Name         | Type   | Description                     |
| ------------ | ------ | ------------------------------- |
| workflow_id* | string | To enable or disable a workflow |

**Payload:**

| Name        | Type    | Description                 |
| ----------- | ------- | --------------------------- |
| is_enabled* | boolean | Enable or disable a worflow |


**Response:**
```json
{
    "is_enabled": false
}
```

### Delete workflow by workflow_id
```js
    agenty.workflows.delete("65267d8733013demo2dbf0f2")
```

**Parameter:**

| Name          | Type   | Description                           |
| ------------- | ------ | ------------------------------------- |
| workflows_id* | number | To delete the workflow by workflow_id |


**Response:**
```json
{
  "message": "Workflow with id: 65267d8733013demo2dbf0f2 deleted successfully"
}