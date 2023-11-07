## Jobs

### Start an agent job
```js 
    agenty.jobs.start(agent_id)
```

**Parameter:**

| Name      | Type   | Description    |
| --------- | ------ | -------------- |
| agent_id* | string | ID of an agent |


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
    agenty.jobs.stop(job_id)
```

**Parameter:**

| Name    | Type   | Description        |
| ------- | ------ | ------------------ |
| job_id* | number | ID of an agent job |


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
{   "total": 229,
    "limit": 1000,
    "offset": 0,
    "returned": 229,
    "result":[
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
    ...
  ]
}
```

### Get job
```js
    agenty.jobs.get(job_id)
```
**Parameter:**

| Name    | Type   | Description        |
| ------- | ------ | ------------------ |
| job_id* | number | ID of an agent job |

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

### Get job result
```js
    agenty.jobs.result(job_id)
```
**Parameter:**

| Name    | Type   | Description        |
| ------- | ------ | ------------------ |
| job_id* | number | ID of an agent job |

**Response:**
```json
{
  "total": 10,
  "limit": 1000,
  "offset": 0,
  "returned": 10,
  "result": [
    {
      "url": "https://books.toscrape.com/",
      "title": "A Light in the ...",
      "price": "£51.77"
    },
    {
      "url": "https://books.toscrape.com/",
      "title": "Tipping the Velvet",
      "price": "£53.74"
    },
    ...
  ]
}
```