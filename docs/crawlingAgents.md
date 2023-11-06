## Crawling Agents

### Create an agent
```js
    agenty.crawlingAgents.create({
    "name": "Crawling Agent Demo",
    "type": "crawling",
    "config": {
        "url": "https://sandbox.agenty.com/product",
        "collections": [
          {
            "name": "Collection1",
            "fields": [
              {
                "from": "url",
                "join": false,
                "name": "url",
                "type": "DEFAULT",
                "extract": "TEXT",
                "selector": "",
                "post_processing": []
              },
              {
                "from": null,
                "join": false,
                "name": "title",
                "type": "CSS",
                "extract": "TEXT",
                "selector": "h5.text-uppercase",
                "attribute": null
              },
              {
                "from": null,
                "join": false,
                "name": "price",
                "type": "CSS",
                "extract": "TEXT",
                "selector": ".price .act-price",
                "attribute": null
              },
              ...
            ]
          }
        ],
        "crawl_rules": [
          "https:\/\/sandbox\.agenty\.com\/product-detail\/([0-9]+)"
        ],
        "process_rules": [
          "https:\/\/sandbox\.agenty\.com\/product-detail\/([0-9]+)"
        ]
      },
    "input": {
      "data": [],
      "type": "url"
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
  "agent_id": "7edonede87",
  "account_id": 001,
  "user_id": 002,
  "type": "crawling",
  "name": "Crawling Agent Demo",
  "config": {
    "url": "https://sandbox.agenty.com/product",
    "collections": [
      {
        "name": "Collection1",
        "fields": [
          {
            "from": "url",
            "join": false,
            "name": "url",
            "type": "DEFAULT",
            "extract": "TEXT",
            "selector": "",
            "post_processing": []
          },
          {
            "from": null,
            "join": false,
            "name": "title",
            "type": "CSS",
            "extract": "TEXT",
            "selector": "h5.text-uppercase",
            "attribute": null
          },
          {
            "from": null,
            "join": false,
            "name": "price",
            "type": "CSS",
            "extract": "TEXT",
            "selector": ".price .act-price",
            "attribute": null
          }
        ]
      }
    ],
    "crawl_rules": [
      "https:\/\/sandbox\/.agenty\/.com\/product-detail\/([0-9]+)"
    ],
    "process_rules": [
      "https:\/\/sandbox\/.agenty\/.com\/product-detail\/([0-9]+)"
    ]
  },
  "priority_rules": [ "" ],
  "input": { "data": [], "type": "url" }
}
```

### Get agent
```js
    agenty.crawlingAgents.get(agent_id)
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
  "name": "Crawling Agent Demo",
  "description": null,
  "type": "crawling",
  "tags": [],
  "version": 7,
  "config": {
    "url": "https://sandbox.agenty.com/product",
    "collections": [
      {
        "name": "Collection1",
        "fields": [
          {
            "from": "url",
            "join": false,
            "name": "url",
            "type": "DEFAULT",
            "extract": "TEXT",
            "selector": "",
            "post_processing": []
          },
          {
            "from": null,
            "join": false,
            "name": "title",
            "type": "CSS",
            "extract": "TEXT",
            "selector": "h5.text-uppercase",
            "attribute": null
          },
          {
            "from": null,
            "join": false,
            "name": "price",
            "type": "CSS",
            "extract": "TEXT",
            "selector": ".price .act-price",
            "attribute": null
          }
        ]
      } 
    ],
    "crawl_rules": [ "https://sandbox.agenty.com/product-detail/([0-9]+)" ],
    "process_rules": [ "https://sandbox.agenty.com/product-detail/([0-9]+)" ],
    "priority_rules": [ "" ]
  },
  "input": { "data": [], "type": "url" },
  "created_at": "2023-10-13T09:48:10.000Z",
  "updated_at": "2023-10-16T07:22:44.000Z",
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
    agenty.crawlingAgents.update(agent_id, {
        "name": "Crawling Agent Demo Update",
        "type": "crawling",
        "config": {
          "url": "https://sandbox.agenty.com/product",
          "collections": [
      {
        "name": "Collection1",
        "fields": [
          {
            "from": "url",
            "join": false,
            "name": "url",
            "type": "DEFAULT",
            "extract": "TEXT",
            "selector": "",
            "post_processing": []
          },
          {
            "from": null,
            "join": false,
            "name": "title",
            "type": "CSS",
            "extract": "TEXT",
            "selector": "h5.text-uppercase",
            "attribute": null
          },
          {
            "from": null,
            "join": false,
            "name": "price",
            "type": "CSS",
            "extract": "TEXT",
            "selector": ".price .act-price",
            "attribute": null
          },
          ...
        ]
      }
    ],
      "crawl_rules": [
      "https:\/\/sandbox\.agenty\.com\/product-detail\/([0-9]+)"
    ],
    "process_rules": [
      "https:\/\/sandbox\.agenty\.com\/product-detail\/([0-9]+)"
    ]
  },
  "input": {
    "data": [],
    "type": "url"
  }
})
```
**Payload:**

| Name    | Type   | Description                                             |
| ------- | ------ | ------------------------------------------------------- |
| name*   | string | Name of your agent                                      |
| type*   | enum   | Select one of them(scraping, crawling, changedetection) |
| config* | object | Describe selectors and fields                           |

[For complete reference click here](https://agenty.com/docs/api#tag/Agents/operation/AgentsController_updateAgent)

**Response:**
```json
{
  "name": "Crawling Agent Demo Update",
  "type": "crawling",
  "config": {
    "url": "https://sandbox.agenty.com/product",
    "collections": [  
      {
        "name": "Collection1",
        "fields": [
          {
            "from": "url",
            "join": false,
            "name": "url",
            "type": "DEFAULT",
            "extract": "TEXT",
            "selector": "",
            "post_processing": []
          },
          {
            "from": null,
            "join": false,
            "name": "title",
            "type": "CSS",
            "extract": "TEXT",
            "selector": "h5.text-uppercase",
            "attribute": null
          },
          {
            "from": null,
            "join": false,
            "name": "price",
            "type": "CSS",
            "extract": "TEXT",
            "selector": ".price .act-price",
            "attribute": null
          },
          ...
        ]
      } 
    ],
    "crawl_rules": [ "https://sandbox.agenty.com/product-detail/([0-9]+)" ],
    "process_rules": [ "https://sandbox.agenty.com/product-detail/([0-9]+)" ],
    "priority_rules": [ "" ]
  },
  "input": { "data": [], "type": "url" },
  "user_id": 002
}
```

### Delete an agent 
```js
    agenty.crawlingAgents.delete(agent_id)
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