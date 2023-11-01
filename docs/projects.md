## Projects

### Create a project
```js
    agenty.projects.create({
        name: "Project-1",
        description: "Your description"
    })
```
**Payload:**

| Name        | Type   | Description                |
| ----------- | ------ | -------------------------- |
| name*       | string | Name of the project        |
| description | string | Description of the project |

[For complete reference click here](https://agenty.com/docs/api#tag/Projects/operation/ProjectsController_createProject)

**Response:**
```json
{
  "name": "Project-1",
  "description": "Your description",
  "account_id": 001,
  "user_id": 002,
  "project_id": 1
}
```

### Get Projects
```js 
    agenty.projects.list()
```

**Response:**
```json
{
  "total": 3,
  "limit": 1000,
  "offset": 0,
  "returned": 3,
  "result": [
    {
      "project_id": 1,
      "account_id": 001,
      "name": "E-commerce Project",
      "description": "All the e-commerce agents are here.",
      "created_at": "2023-10-20T09:34:56.000Z",
      "updated_at": "2023-10-30T11:04:11.000Z"
    },
    {
      "project_id": 2,
      "account_id": 001,
      "name": "Germany Project",
      "description": "Agents in this project belongs to germany client",
      "created_at": "2023-10-20T10:59:30.000Z",
      "updated_at": "2023-10-30T05:37:38.000Z"
    },
    ...
  ]
}
```

### Get project by project_id
```js
    agenty.projects.get(1)
```

**Parameter:**

| Name        | Type   | Description            |
| ----------- | ------ | ---------------------- |
| project_id* | number | To get a project by Id |


**Response:**
```json
{
  "project_id": 1,
  "account_id": 001,
  "user_id": 002,
  "name": "E-commerce Project",
  "description": "All the e-commerce agents are here.",
  "agents": [
    {
      "project_id": 1,
      "agent_id": "0a7n0n5123",
      "name": "Crawling Agent Example",
      "description": "",
      "type": "crawling"
    },
    ...
  ]
}
```

### Update project by project_id
```js
    agenty.projects.update(1, {
        name: "Project-1",
        description: "Let's change the description of this project"
    })
```

**Parameter:**

| Name        | Type   | Description               |
| ----------- | ------ | ------------------------- |
| project_id* | number | To update a project by Id |


**Payload:**

| Name        | Type   | Description                |
| ----------- | ------ | -------------------------- |
| name*       | string | Name of the project        |
| description | string | Description of the project |

[For complete reference click here](https://agenty.com/docs/api#tag/Projects/operation/ProjectsController_updateProject)

**Response:**
```json
{
    "name": "Project-1",
    "description":"Let's change the description of this project",
    "project_id": 1,
    "account_id": 001
}
```

### Delete project by project_id
```js
    agenty.projects.delete(1)
```

**Parameter:**

| Name        | Type   | Description               |
| ----------- | ------ | ------------------------- |
| project_id* | number | To delete a project by Id |


**Response:**
```json
{ 
    "message": "Project with id: 1 deleted successfully" 
}
```

### Add agent(s) in project
```js
    agenty.projectAgents.create(1, {
        "agents":[ "4rft6yhgt6", "4rfder56hy" ]
    })
```
**Payload:**

| Name        | Type     | Description                         |
| ----------- | -------- | ----------------------------------- |
| project_id* | number   | project_id                          |
| agents*     | string[] | Pass the agent_id to add in project |


**Response:**
```json
{
  "message": "Agent(s) with id: 4rft6yhgt6,4rfder56hy added in Project: 'Project-1' successfully"
}
```

### Remove agent(s) from project
```js
    agenty.projectAgents.delete(2, "4rfder56hy")
```
**Parameter:**

| Name        | Type   | Description                                       |
| ----------- | ------ | ------------------------------------------------- |
| project_id* | number | project_id                                        |
| agent_id*   | string | Pass the agent_id to remove agent(s) from project |

**Response:**
```json
{ 
    "message": "Agent(s) with id: 4rfder56hy removed successfully" 
}
```