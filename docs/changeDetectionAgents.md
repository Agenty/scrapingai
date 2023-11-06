## Change Detection Agents

### Create an agent
```js
    agenty.changeDetectionAgents.create({
    "name": "timesofindia.indiatimes.com(Change detection)",
    "description": "Change Detection agent",
    "type": "changedetection",
    "config": {
        "url": "https://timesofindia.indiatimes.com/",
        "type": "CSS",
        "emails": "john.doe@agenty.com",
        "extract": "HTML",
        "timeout": 30000,
        "keywords": [
            "breaking",
            "exclusive",
            "news",
            "india"
        ],
        "selector": ".nEjlO",
        "attribute": null,
        "keywordschange": "Added",
        "keywords_change": "Added",
        "ignore_minor_changes": true
    },
    "input": {
        "data": [],
        "type": "url"
    },
    "scheduler": {
        "type": "interval",
        "expression": "15m",
        "is_enabled": true,
        "description": "Every 15 m"
    }
})
```
**Parameters:**

| Name    | Type   | Description                                             |
| ------- | ------ | ------------------------------------------------------- |
| name*   | string | Name of your agent                                      |
| type*   | enum   | Select one of them(scraping, crawling, changedetection) |
| config* | object | Describe selectors and fields                           |

[For complete reference click here](https://agenty.com/docs/api#tag/Agents/operation/AgentsController_createAgent)
**Response:**
```json
{
  "agent_id": "1vu17au9aa",
  "account_id": 001,
  "user_id": 002,
  "type": "changedetection",
  "name": "timesofindia.indiatimes.com(Change detection)",
  "description": "Change Detection agent",
  "version": 1,
  "is_public": false,
  "config": {
    "url": "https://timesofindia.indiatimes.com/",
    "type": "CSS",
    "emails": "john.doe@agenty.com",
    "extract": "HTML",
    "timeout": 30000,
    "keywords": [ "breaking", "exclusive", "news", "india" ],
    "selector": ".nEjlO",
    "attribute": null,
    "keywordschange": "Added",
    "keywords_change": "Added",
    "ignore_minor_changes": true
  },
  "input": { "data": [], "type": "url" }
}
```

### Get agent
```js
    agenty.changeDetectionAgents.get(agent_id)
```
**Parameter:**

| Name      | Type   | Description                 |
| --------- | ------ | --------------------------- |
| agent_id* | string | To get an agent by agent id |

**Response:**
```json
{
  "agent_id": "1vu17au9aa",
  "account_id": 001,
  "user_id": 002,
  "project_id": null,
  "name": "timesofindia.indiatimes.com(Change detection)",
  "description": "Change Detection agent",
  "type": "changedetection",
  "tags": [],
  "version": 1,
  "config": {
    "url": "https://timesofindia.indiatimes.com/",
    "type": "CSS",
    "emails": "john.doe@agenty.com",
    "extract": "HTML",
    "timeout": 30000,
    "keywords": [ "breaking", "exclusive", "news", "india" ],
    "selector": ".nEjlO",
    "attribute": null,
    "keywordschange": "Added",
    "keywords_change": "Added",
    "ignore_minor_changes": true
  },
  "input": { "data": [], "type": "url" },
  "created_at": "2023-10-16T05:23:23.000Z",
  "updated_at": null,
  "is_public": 0,
  "is_managed": 0,
  "scripts": null,
  "settings": null,
  "scheduler": null,
  "next_scheduled_run_at": null,
  "last_scheduled_run_at": null,
  "marketplace": null
}
```

### Update an agent
```js
    agenty.changeDetectionAgents.update(agent_id, {
    name: 'timesofindia.indiatimes.com(Change detection) Update',
    type: 'changedetection',
    config: {
        url: 'https://timesofindia.indiatimes.com/',
        type: 'CSS',
        emails: 'john.doe@agenty.com',
        extract: 'HTML',
        timeout: 30000,
        keywords: [ 'breaking', 'exclusive', 'news', 'india', 'world' ],
        selector: '.nEjlO',
        attribute: null,
        keywordschange: 'Added',
        keywords_change: 'Added',
        ignore_minor_changes: true
    },
    input: { data: [], type: 'url' }
})
```
**Parameter:**

| Name    | Type   | Description                                             |
| ------- | ------ | ------------------------------------------------------- |
| name*   | string | Name of your agent                                      |
| type*   | enum   | Select one of them(scraping, crawling, changedetection) |
| config* | object | Describe selectors and fields                           |

[For complete reference click here](https://agenty.com/docs/api#tag/Agents/operation/AgentsController_updateAgent)
**Response:**
```json
{
  "name": "timesofindia.indiatimes.com(Change detection) Update",
  "type": "crawling",
   "config": {
        "url": "https://timesofindia.indiatimes.com/",
        "type": "CSS",
        "emails": "john.doe@agenty.com",
        "extract": "HTML",
        "timeout": 30000,
        "keywords": [ "breaking", "exclusive", "news", "india", "world" ],
        "selector": ".nEjlO",
        "attribute": null,
        "keywordschange": "Added",
        "keywords_change": "Added",
        "ignore_minor_changes": true
    },
    "input": {
        "data": [],
        "type": "url"
    },
    "user_id": 002
}
```

### Delete an agent 
```js
    agenty.changeDetectionAgents.delete(agent_id)
```

**Parameter:**

| Name      | Type   | Description                     |
| --------- | ------ | ------------------------------- |
| agent_id* | string | To delete the agent by agent_id |


**Response:**
```json
{
  "message": "1 agent with id: 1vu17au9aa deleted successfully"
}