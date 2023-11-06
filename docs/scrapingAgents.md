## Scraping Agents

### Create an agent
```js
    agenty.scrapingAgents.create({
    "name": "Scraping Agent Demo",
    "type": "scraping",
    "config": {
        "url": "https://sandbox.agenty.com/product",
        "collections": [
            {
                "name": "Collection1",
                "fields": [
                    {
                        "from": "url",
                        "name": "url",
                        "type": "DEFAULT"
                    },
                    {
                        "from": null,
                        "join": false,
                        "name": "title",
                        "type": "CSS",
                        "extract": "TEXT",
                        "selector": ".card-title.h6",
                        "attribute": null
                    },
                    {
                        "from": null,
                        "join": false,
                        "name": "price",
                        "type": "CSS",
                        "extract": "TEXT",
                        "selector": ".card-footer p",
                        "attribute": null
                    },
                    ...
                ]
            }
        ]
    }
})
```
**Parameters:**

| Name    | Type   | Description                                              |
| ------- | ------ | -------------------------------------------------------- |
| name*   | string | Name of your agent                                       |
| type*   | enum   | Select one of them(scraping, crawling, Change Detection) |
| config* | object | Describe selectors and fields                            |

[For complete reference click here](https://agenty.com/docs/api#tag/Agents/operation/AgentsController_createAgent)
**Response:**
```json
{
    "agent_id": "7edonede87",
    "account_id": 001,
    "user_id": 002,
    "type": "scraping",
    "name": "Scraping Agent Demo",
    "description": null,
    "version": 1,
    "is_public": false,
    "config": {
        "url": "https://sandbox.agenty.com/product",
        "collections": [
            {
                "name": "Collection1",
                "fields": [
                    {
                        "name": "url",
                        "type": "DEFAULT",
                        "from": "url"
                    },
                    {
                        "name": "title",
                        "type": "CSS",
                        "selector": ".card-title.h6",
                        "extract": "TEXT",
                        "attribute": null,
                        "from": null,
                        "join": false
                    },
                    {
                        "name": "price",
                        "type": "CSS",
                        "selector": ".card-footer p",
                        "extract": "TEXT",
                        "attribute": null,
                        "from": null,
                        "join": false
                    }
                ]
            }
        ]
    },
    "input": {
        "type": "url"
    }
}
```

### Get agent
```js
    agenty.scrapingAgents.get(agent_id)
```
**Parameter:**

| Name      | Type   | Description                 |
| --------- | ------ | --------------------------- |
| agent_id* | string | To get an agent by agent id |

**Response:**
```json
{
  "agent_id": "7edonede87",
  "account_id": 001,
  "user_id": 002,
  "project_id": null,
  "name": "Scraping Agent Demo",
  "description": null,
  "type": "scraping",
  "tags": [],
  "version": 3,
  "config": {
    "url": "https://sandbox.agenty.com/product",
    "collections": [ [Object] ]
  },
  "input": { "data": [], "type": "url" },
  "created_at": "2023-10-13T04:47:08.000Z",
  "updated_at": "2023-10-13T06:20:40.000Z",
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
    agenty.scrapingAgents.update(agent_id, {
    "name": "Scraping Agent Demo Update",
    "type": "scraping",
    "config": {
        "url": "https://sandbox.agenty.com/product",
        "collections": [
            {
                "name": "Collection1",
                "fields": [
                    {
                        "from": "url",
                        "name": "url",
                        "type": "DEFAULT"
                    },
                    {
                        "from": null,
                        "join": false,
                        "name": "title",
                        "type": "CSS",
                        "extract": "TEXT",
                        "selector": ".card-title.h6",
                        "attribute": null
                    },
                    {
                        "from": null,
                        "join": false,
                        "name": "price",
                        "type": "CSS",
                        "extract": "TEXT",
                        "selector": ".card-footer p",
                        "attribute": null
                    },
                    ...
                ]
            }
        ]
    }
})
```
**Payload:**

| Name    | Type    | Description                                              |
| ------- | ------- | -------------------------------------------------------- |
| name*   | string  | Name of your agent                                       |
| type*   | enum    | Select one of them(scraping, crawling, Change Detection) |
| config* | objects | Describe selectors and fields                            |

[For complete reference click here](https://agenty.com/docs/api#tag/Agents/operation/AgentsController_updateAgent)
**Response:**
```json
{
    "agent_id": "7edonede87",
    "account_id": 001,
    "user_id": 002,
    "type": "scraping",
    "name": "Scraping Agent Demo Update",
    "description": null,
    "version": 1,
    "is_public": false,
    "config": {
        "url": "https://sandbox.agenty.com/product",
        "collections": [
            {
                "name": "Collection1",
                "fields": [
                    {
                        "name": "url",
                        "type": "DEFAULT",
                        "from": "url"
                    },
                    {
                        "name": "title",
                        "type": "CSS",
                        "selector": ".card-title.h6",
                        "extract": "TEXT",
                        "attribute": null,
                        "from": null,
                        "join": false
                    },
                    {
                        "name": "price",
                        "type": "CSS",
                        "selector": ".card-footer p",
                        "extract": "TEXT",
                        "attribute": null,
                        "from": null,
                        "join": false
                    }
                ]
            }
        ]
    },
    "input": {
        "type": "url"
    }
}
```

### Delete an agent
```js
    agenty.scrapingAgents.delete(agent_id)
```

**Parameter:**

| Name      | Type   | Description                     |
| --------- | ------ | ------------------------------- |
| agent_id* | string | To delete the agent by agent_id |


**Response:**
```json
{
  "message": "1 agent with id: 7edonede87 deleted successfully"
}