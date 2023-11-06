## Lists

### Create a list
```js
    agenty.lists.create({
        name: "List-01",
        description: "the description"
    })
```
**Parameters:**

| Name        | Type   | Description             |
| ----------- | ------ | ----------------------- |
| name*       | string | Name of the list        |
| description | string | Description of the list |

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
{
  "total": 8,
  "limit": 1000,
  "offset": 0,
  "returned": 8,
  "result": [
    {
      "list_id": 53,
      "account_id": 001,
      "name": "List-1",
      "description": "This is my list one",
      "created_at": "2023-06-15T09:29:18.000Z",
      "updated_at": "2023-10-18T05:39:55.000Z"
    },
    {
      "list_id": 54,
      "account_id": 001,
      "name": "List-2",
      "description": null,
      "created_at": "2023-06-15T09:32:15.000Z",
      "updated_at": null
    },
    ...
    ]  
}
```

### Get list 
```js
    agenty.lists.get(list_id)
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

### Update list
```js
    agenty.lists.update(list_id, {
        name: "List-01 Update"
    })
```

**Parameter:**

| Name        | Type   | Description                              |
| ----------- | ------ | ---------------------------------------- |
| list_id*    | number | To update a list name, description by Id |
| name*       | string | Name of the list                         |
| description | string | Description of the list                  |

[For complete reference click here](https://agenty.com/docs/api#tag/Lists/operation/ListController_updateList)
**Response:**
```json
{ 
    "message": "List with id: 1 updated successfully" 
}
```

### Delete list
```js
    agenty.lists.delete(list_id)
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
