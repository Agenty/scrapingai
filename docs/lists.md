## Lists

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
      "name": "list-1",
      "description": null,
      "created_at": "2023-06-15T09:29:18.000Z",
      "updated_at": "2023-06-15T09:29:46.000Z"
    },
    {
      "list_id": 2,
      "account_id": 001,
      "name": "list-2",
      "description": null,
      "created_at": "2023-06-15T09:32:15.000Z",
      "updated_at": null
    }
]
```

### Get list by list_id
```js
    agenty.list.get(1)
```

**Parameter:**

| Name     | Type   | Description  |
| -------- | ------ | ------------ |
| list_id* | number | ID of a list |


**Response:**
```json
{
  "list_id": 55,
  "account_id": 184,
  "name": "list-1",
  "description": null,
  "created_at": "2023-06-15T09:32:15.000Z",
  "updated_at": null,
  "data": { "total": 0, "limit": 1000, "offset": 0, "returned": 0, "result": [] }
}
```

### Create a list
```js
    agenty.list.create({
        name:"List-02",
        description: "Your description goes here"
    })
```
**Payload:**

| Name        | Type   | Description              |
| ----------- | ------ | ------------------------ |
| name*       | string | Name of your list        |
| description | string | description of your list |

**Response:**
```json
{ 
    "name": "List-2", 
    "account_id": 001, 
    "user_id": 002, 
    "list_id": 2 
}
```

### Update list by id
```js
    agenty.list.update(2, {
        name: "New Name"
    })
```

**Parameter:**

| Name        | Type   | Description              |
| ----------- | ------ | ------------------------ |
| list_id*    | number | list id                  |

**Payload:**

| Name        | Type   | Description              |
| ----------- | ------ | ------------------------ |
| name*       | string | Name of your list        |
| description | string | description of your list |


**Response:**
```json
{ 
    "message": "List with id: 2 updated successfully" 
}
```

### Delete list by id
```js
    agenty.list.delete(2)
```

**Parameter:**

| Name        | Type   | Description              |
| ----------- | ------ | ------------------------ |
| list_id*    | number | list id                  |


**Response:**
```json
{ 
    "message": "List with id: 2 deleted successfully" 
}
```
