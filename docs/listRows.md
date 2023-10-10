### Get list rows by list_id
```js
    agenty.listRows.list(2)
```

**Parameter:**

| Name        | Type   | Description              |
| ----------- | ------ | ------------------------ |
| list_id*    | number | list id                  |


**Response:**
```json
[
    {
      "_id": "648ad9f67bhg65de869eb704",
      "url": "http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html"
    },
    {
      "_id": "648ad9f67bhg65de869eb705",
      "url": "http://books.toscrape.com/catalogue/tipping-the-velvet_999/index.html"
    }
]
```

### Get list row by list_id & row_id
```js
    agenty.listRows.get(2, "648ad9f67bhg65de869eb704")
```

**Parameter:**

| Name        | Type   | Description              |
| ----------- | ------ | ------------------------ |
| list_id*    | number | list id                  |
| row_id*     | number | row id                   |


**Response:**
```json
    {
      "_id": "648ad9f67bhg65de869eb704",
      "url": "http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html"
    }
```