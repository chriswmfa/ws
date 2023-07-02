# CRUD API

This CRUD API consists of 4 simple endpoints, 1 for creation, 1 to retrieve, 1 to update and 1 to delete. I've included a basic set of tests which all pass when ran and have included example usage below.

Also included in the repository is the function for convering numbers to roman numerals and a memoization function.

## Creating a user (POST)

Endpoint URL - http://localhost:3000/users

Example request
```
{
  "data": {
    "type": "user",
    "attributes": {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "password": "s3cure_passw0rd",
      "phone": "1234568910",
      "address": "14 Real Street, RL1 OJ2"
    }
  }
}
```

## Getting a user (GET)

Endpoint URL - http://localhost:3000/users/{userId}


## Update a user (PATCH)

Endpoint URL - http://localhost:3000/users/{userId}

```
{
  "data": {
    "type": "user",
    "attributes": {
      "name": "John Doesnt",
      "email": "johndoesnt@example.com",
    }
  }
}
```

## Delete a user (DELETE)

http://localhost:3000/users/1