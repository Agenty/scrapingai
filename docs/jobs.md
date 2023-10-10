## Jobs

### Start an agent job
```js 
    agenty.jobs.start({
        "agent_id":"7hy654rfgt"
    })
```

**Payload:**

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| agent_id*     | string      | ID of an agent                              |


**Response:**
```json
{
  "account_id": 001,
  "agent_id": "7hy654rfgt",
  "type": "scraping",
  "status": "started",
  "priority": 3,
  "created_at": "2023-10-10T05:06:35.008Z",
  "job_id": 19558
}
```

### Stop an agent job
```js
    agenty.jobs.stop(19558)
```

**Parameter:**

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| job_id*       | number      | ID of an agent job                          |


**Response:**
```json
{
   "job_id": 19541,
    "account_id": 001,
    "agent_id": "7hy654rfgt",
    "type": "scraping",
    "status": "completed",
    "priority": 3,
    "pages_total": 1,
    "pages_processed": 4,
    "pages_succeeded": 4,
    "pages_failed": 0,
    "pages_credit": 4,
    "created_at": "2023-10-09T08:55:59.000Z",
    "started_at": "2023-10-09T08:56:00.000Z",
    "completed_at": "2023-10-09T08:56:10.000Z",
    "stopped_at": null,
    "is_scheduled": 0,
    "worker_ip": null,
    "queue_time": "00:00:01",
    "run_duration": "00:00:10",
    "error": null,
    "ping_at": null
}
```

### Get jobs
```js
    agenty.jobs.list()
```

**Response:**
```json
[
    {
      "job_id": 19418,
      "account_id": 001,
      "agent_id": "7hy654rfgt",
      "type": "scraping",
      "status": "completed",
      "priority": 2,
      "pages_total": 1,
      "pages_processed": 1,
      "pages_succeeded": 1,
      "pages_failed": 0,
      "pages_credit": 0,
      "created_at": "2023-09-20T09:44:54.000Z",
      "started_at": "2023-09-20T09:44:54.000Z",
      "completed_at": "2023-09-20T09:45:04.000Z",
      "stopped_at": null,
      "is_scheduled": 0,
      "queue_time": "00:00:00",
      "run_duration": "00:00:10",
      "error": null,
      "ping_at": null
    },
     {
      "job_id": 19419,
      "account_id": 001,
      "agent_id": "7hy654rfgt",
      "type": "scraping",
      "status": "completed",
      "priority": 2,
      "pages_total": 1,
      "pages_processed": 1,
      "pages_succeeded": 1,
      "pages_failed": 0,
      "pages_credit": 0,
      "created_at": "2023-09-20T09:44:54.000Z",
      "started_at": "2023-09-20T10:23:24.000Z",
      "completed_at": "2023-09-10T:23:30.000Z",
      "stopped_at": null,
      "is_scheduled": 0,
      "queue_time": "00:00:00",
      "run_duration": "00:00:10",
      "error": null,
      "ping_at": null
    }
]
```

### Get job by id
```js
    agenty.jobs.get(19418)
```

**Response:**
```json
{
    "job_id": 19541,
    "account_id": 001,
    "agent_id": "7hy654rfgt",
    "type": "scraping",
    "status": "completed",
    "priority": 3,
    "pages_total": 1,
    "pages_processed": 4,
    "pages_succeeded": 4,
    "pages_failed": 0,
    "pages_credit": 4,
    "created_at": "2023-10-09T08:55:59.000Z",
    "started_at": "2023-10-09T08:56:00.000Z",
    "completed_at": "2023-10-09T08:56:10.000Z",
    "stopped_at": null,
    "is_scheduled": 0,
    "worker_ip": null,
    "queue_time": "00:00:01",
    "run_duration": "00:00:10",
    "error": null,
    "ping_at": null
    }
```