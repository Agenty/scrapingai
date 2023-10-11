## Lists

### Create a list
```js
    agenty.list.create({
        name:"List-01",
        description: "Your description"
    })
```
**Payload:**

| Name        | Type   | Description              |
| ----------- | ------ | ------------------------ |
| name*       | string | Name of your list        |
| description | string | Description of your list |

[For complete reference click here](https://agenty.com/docs/api#tag/Lists/operation/ListController_createList)
**Response:**
```json
{ 
    "name": "List-01", 
    "account_id": 001, 
    "user_id": 002, 
    "list_id": 1
}
```

### Get Lists
```js 
    agenty.lists.list()
```

**Response:**
```json
[
    {
      "list_id": 1,
      "account_id": 001,
      "name": "list-01",
      "description": null,
      "created_at": "2023-06-15T09:29:18.000Z",
      "updated_at": "2023-06-15T09:29:46.000Z"
    },
    {
      "list_id": 2,
      "account_id": 001,
      "name": "list-02",
      "description": null,
      "created_at": "2023-06-15T09:32:15.000Z",
      "updated_at": null
    },
    ...
]
```

### Get list by list_id
```js
    agenty.list.get(1)
```

**Parameter:**

| Name     | Type   | Description         |
| -------- | ------ | ------------------- |
| list_id* | number | To get a list by Id |


**Response:**
```json
{
  "list_id": 1,
  "account_id": 001,
  "name": "list-01",
  "description": "Your description",
  "created_at": "2023-06-15T09:29:18.000Z",
  "updated_at": null,
  "data": { "total": 0, "limit": 1000, "offset": 0, "returned": 0, "result": [] }
}
```

### Update list by list_id
```js
    agenty.list.update(1, {
        name: "List-01 Update"
    })
```

**Parameter:**

| Name     | Type   | Description                              |
| -------- | ------ | ---------------------------------------- |
| list_id* | number | To update a list name, description by Id |


**Payload:**

| Name        | Type   | Description              |
| ----------- | ------ | ------------------------ |
| name*       | string | Name of your list        |
| description | string | Description of your list |

[For complete reference click here](https://agenty.com/docs/api#tag/Lists/operation/ListController_updateList)
**Response:**
```json
{ 
    "message": "List with id: 1 updated successfully" 
}
```

### Delete list by list_id
```js
    agenty.list.delete(1)
```

**Parameter:**

| Name     | Type   | Description            |
| -------- | ------ | ---------------------- |
| list_id* | number | To delete a list by Id |


**Response:**
```json
{ 
    "message": "List with id: 1 deleted successfully" 
}
```
