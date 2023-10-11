## ListRows
### Add a new row in list
```js
    agenty.listRows.create(2, [
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

| Name   | Type | Description                                |
| ------ | ---- | ------------------------------------------ |
| field1 | any  | Field name must be same as existiing field |
| field2 | any  | Field name must be same as existiing field |

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

### Get list rows by list_id
```js
    agenty.listRows.list(2)
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

### Get list row by list_id & row_id
```js
    agenty.listRows.get(2, "65262c3233ed3446a2dbf068")
```

**Parameter:**

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


### Update list row by row_id
```js
    agenty.listRows.update(2, "65262c3233ed3446a2dbf068",{
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
    agenty.listRows.delete(2, "65262c3233ed3446a2dbf068")
```

**Parameter:**

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

### Clear rows by list_id
```js
    agenty.listRows.clear(3)
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