## Schedulers

### Create a Scheduler
```js
    agenty.schedulers.create(agent_id, {
    "type": "cron",
    "expression": "0 20 * * MON,WED,FRI",
    "frequency": 0,
    "is_enabled": true,
    "description": "At 08:00 PM, only on Monday, Wednesday, and Friday"
})
```
**Parameters:**

| Name        | Type   | Description                         |
| ----------- | ------ | ----------------------------------- |
| agent_id*   | string | To create a scheduler on an agent   |
| type*       | enum   | Must be one of them(cron, interval) |
| expression* | string | Must be a valid CRON expression     |


[For complete reference click here](https://agenty.com/docs/api#tag/Scheduler/operation/SchedulerController_createAgentSchedule)

**Response:**
```json
{
    "next_scheduled_run_at": "2023-10-13T20:00:00.000Z",
    "scheduler": {
        "expression": "0 20 * * MON,WED,FRI",
        "type": "cron",
        "is_enabled": true,
        "description": "At 08:00 PM, only on Monday, Wednesday, and Friday"
    },
    "last_scheduled_run_at": null
}
```

### Get scheduled agent
```js
    agenty.schedulers.get(agent_id)
```
**Parameter:**

| Name      | Type   | Description                      |
| --------- | ------ | -------------------------------- |
| agent_id* | string | To get an agent schedule details |

**Response:**
```json
{
    "scheduler": {
        "type": "cron",
        "expression": "0 20 * * MON,WED,FRI",
        "is_enabled": true,
        "description": "At 08:00 PM, only on Monday, Wednesday, and Friday"
    },
    "next_scheduled_run_at": "2023-10-13T20:00:00.000Z",
    "last_scheduled_run_at": null
}
```

### Enable or disable an agent schedule
```js
    agenty.schedulers.isEnabled(agent_id, {
        "is_enabled": true,
})
```

**Parameter:**

| Name      | Type   | Description                                     |
| --------- | ------ | ----------------------------------------------- |
| agent_id* | string | Pass the agent_id to enable/disable a scheduler |

**Payload:**

| Name        | Type    | Description                         |
| ----------- | ------- | ----------------------------------- |
| is_enabled* | boolean | Enable or disable an agent schedule |


**Response:**
```json
{
    "is_enabled": false
}
```

### Delete scheduler for an agent
```js
    agenty.schedulers.delete(agent_id)
```

**Parameter:**

| Name      | Type   | Description                 |
| --------- | ------ | --------------------------- |
| agent_id* | string | To delete an agent schedule |

**Response:**
```json
{
  "message": "Schedule removed successfully"
}
