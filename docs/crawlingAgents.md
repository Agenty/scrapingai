## Crawling Agents

### Create an agent
```js
    agenty.crawlingAgents.create({
  "name": "Crawling Agent Demo",
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

| Name    | Type    | Description                                              |
| ------- | ------- | -------------------------------------------------------- |
| name*   | string  | Name of your agent                                       |
| type*   | enum    | Select one of them(Scraping, Crawling, Change Detection) |
| config* | Objects | Describe selectors and fields                            |

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

### Get agent by agent_id
```js
    agenty.crawlingAgents.get("7edonede87")
```
**Parameter:**

| Name      | Type   | Description                 |
| --------- | ------ | --------------------------- |
| agent_id* | string | To get an agent by agent id |

**Response:**
```json
{
  "name": "Scraping Agent Demo Update",
  "type": "scraping",
  "config": {
    "url": "https://sandbox.agenty.com/product",
    "collections":  [
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
        ]
  },
  "input": { "data": [], "type": "url" }
}
```


### Update an agent by agent_id
```js
    agenty.crawlingAgents.update("7edonede87", {
    "name": "Crawling Agent Demo Update",
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
| type*   | enum    | Select one of them(Scraping, Crawling, Change Detection) |
| config* | Objects | Describe selectors and fields                            |

[For complete reference click here](https://agenty.com/docs/api#tag/Agents/operation/AgentsController_updateAgent)
**Response:**
```json
{
    "agent_id": "7edonede87",
    "account_id": 001,
    "user_id": 002,
    "type": "scraping",
    "name": "Crawling Agent Demo Update",
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
     "crawl_rules": [
      "https:\/\/sandbox\/.agenty\/.com\/product-detail\/([0-9]+)"
    ],
    "process_rules": [
      "https:\/\/sandbox\/.agenty\/.com\/product-detail\/([0-9]+)"
    ],
    "input": {
        "type": "url"
    }
}
```