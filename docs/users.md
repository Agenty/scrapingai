## Users

### Create User
```js
    agenty.users.create({
        name: "Manan",
        email: "manan.jain@agenty.com",
        role: "Admin"
});
```

**Parameters:**

| Name   | Type   | Description                                                   |
| ------ | ------ | ------------------------------------------------------------- |
| name*  | string | Name of your user                                             |
| email* | string | E-mail of your user                                           |
| role*  | enum   | Select one of them(Owner, Admin, Manager, Accountant, Viewer) |

[For complete reference click here](https://agenty.com/docs/api#tag/Users/operation/UserController_createUser)

**Response:**
```json
{
  "name": "Manan",
  "email": "manan.jain@agenty.com",
  "role": "Admin",
  "status": "active",
  "ip_address": "103.237.159.37",
  "account_id": 001,
  "guid": "ln865x657sx16o911044dawyu953f3qea0mr",
  "is_email_subscribed": true,
  "user_id": 003
}
```

### Get User
```js
    agenty.users.get(user_id);
```

**Parameter:**

| Name     | Type   | Description         |
| -------- | ------ | ------------------- |
| user_id* | number | To get a user by Id |

**Response:**
```json
{
  "user_id": 003,
  "account_id": 001,
  "name": "Manan Jain",
  "email": "manan.jain@agenty.com",
  "role": "Admin",
  "status": "active",
  "created_at": "2023-10-11T07:17:25.000Z",
  "is_email_verified": null,
  "is_email_subscribed": 1,
  "last_login_at": null,
  "updated_at": "2023-10-11T07:17:58.000Z"
}
```

### Get Users
```js
    agenty.users.list();
```

**Response:**
```json
{
  "total": 4,
  "limit": 1000,
  "offset": 0,
  "returned": 4,
  "result": [
    {
      "user_id": 003,
      "account_id": 001,
      "name": "Manan Jain",
      "email": "manan.jain@agenty.com",
      "role": "Owner",
      "status": "active",
      "created_at": "2023-06-14T05:02:52.000Z",
      "is_email_verified": 1,
      "is_email_subscribed": 1,
      "last_login_at": null,
      "updated_at": "2023-06-21T05:56:13.000Z"
    },
    ...
  ]
}
```

### Update User
```js
    agenty.users.update(user_id, {
        name: "John Doe",
        email: "manan.jain@agenty.com",
        role: "Admin",
        status: "Active"
    });
```

**Parameter:**

| Name     | Type   | Description            |
| -------- | ------ | ---------------------- |
| user_id* | number | To update a user by Id |

[For complete reference click here](https://agenty.com/docs/api#tag/Users/operation/UserController_updateUserById)
**Response:**
```json
{
    "message": "User with id: 003 updated succesfully"
}
```

### Delete User
```js
    agenty.users.delete(user_id);
```

**Parameter:**

| Name     | Type   | Description          |
| -------- | ------ | -------------------- |
| user_id* | number | To delete user by Id |

**Response:**
```json
{
    "message": "1 user(s) with id(s): 003 deleted successfully"
}
```