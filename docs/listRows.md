## ListRows

### Add a new row in list
```js
    agenty.listRows.create(list_id, [
      { 
        field1: "Title-1", 
        field2: "This is a discription"
      },
      { 
        field1: "Title-2", 
        field2: "This is a discription"
      },
      ...
      ]
   )
```

**Parameter:**

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| list_id* | number | list id     |

**Payload:**

| Name   | Type | Description                               |
| ------ | ---- | ----------------------------------------- |
| field1 | any  | Field name must be same as existing field |
| field2 | any  | Field name must be same as existing field |

[For complete reference click here](https://agenty.com/docs/api#tag/Lists/operation/ListRowsController_addRow)
**Response:**
```json
    [
  {
    "_list_id": 2,
    "_id": "65262c3233ed3446a2dbf068",
    "field1": "Title-1",
    "field2": "This is a discription",
    "__v": 0
  },
  {
    "_list_id": 2,
    "_id": "65262c3233ed3446a2dbf069",
    "field1": "Title-2",
    "field2": "This is a discription",
    "__v": 0
  },
  ...
]
```

### Get list rows 
```js
    agenty.listRows.list(list_id)
```

**Parameter:**

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| list_id* | number | list id     |


**Response:**
```json
{
    "total": 10,
    "limit": 1000,
    "offset": 0,
    "returned": 10,
    "result": [
    {
      "_id": "65262c3233ed3446a2dbf068",
      "field1": "Title-1",
      "field2": "This is a discription",
    },
    {
      "_id": "65262c3233ed3446a2dbf068",
      "field1": "Title-1",
      "field2": "This is a discription",
    },
    ...
  ]
}
```

### Get list row
```js
    agenty.listRows.get(list_id, row_id)
```

**Parameters:**

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| list_id* | number | list id     |
| row_id*  | number | row id      |


**Response:**
```json
    {
      "_id": "65262c3233ed3446a2dbf068",
      "field1": "Title-1",
      "field2": "This is a discription",
    }
```


### Update list row 
```js
    agenty.listRows.update(list_id, row_id, {
        field1: "Title-2 Update"
    })
```

**Parameter:**

| Name     | Type   | Description                       |
| -------- | ------ | --------------------------------- |
| list_id* | number | list id to update list row        |
| row_id*  | string | To update a single list row by Id |


**Payload:**

| Name    | Type | Description          |
| ------- | ---- | -------------------- |
| field1* | any  | Update the row value |

[For complete reference click here](https://agenty.com/docs/api#tag/Lists/operation/ListRowsController_updateListRowById)
**Response:**
```json
{
  "_id": "65262c3233ed3446a2dbf068",
  "field1": "Title-2 update",
  "field2": "This is a discription"
}
```

### Delete list row by row_id
```js
    agenty.listRows.delete(list_id, row_id)
```

**Parameters:**

| Name     | Type   | Description                         |
| -------- | ------ | ----------------------------------- |
| list_id* | number | list id to delete list row          |
| row_id*  | string | To delete the single list row by Id |


**Response:**
```json
{
  "message": "Row with id: 65262c3233ed3446a2dbf068 deleted successfully"
}
```

### Clear rows
```js
    agenty.listRows.clear(list_id)
```

**Parameter:**

| Name     | Type   | Description                       |
| -------- | ------ | --------------------------------- |
| list_id* | number | To clear the list data completely |

**Response:**
```json
{
  "message": "All rows deleted successfully"
}
```