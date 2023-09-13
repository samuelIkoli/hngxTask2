# API Documentation

This document provides documentation for the API endpoints of HNG task2 and example requests and responses.

## Table of Contents

- [User Endpoints](#user-endpoints)

  - [Get All Users](#get-all-users)
  - [Get User by Name](#get-user-by-name)
  - [Create User](#create-user)
  - [Update User](#update-user)
  - [Delete User](#delete-user)

- [Installation](#installation-on-local-server)
- [Testing](#testing)

---

## User Endpoints

### Get All Users

Retrieve a list of all users.

- **URL**: `/users`
- **Method**: `GET`
- **Request**: None
- **Response**: Array of Javascript Objects. Objects are user details


### Create User

Create a new user record.

- **URL**: `/api`
- **Method**: `POST`
- **Request**:

  ```json
  {
    "name": "John Doe",
    "value": "anything"
  }
  ```

- **Response** (Success - HTTP Status Code 200):
  Response body is same as created user

### Get User By Name

Retrieve details of a specific user by their name.

- **URL**: `/api/:user_name`
- **Method**: `GET`
- **Request**: None
- **Response**: If user exists, (Success - HTTP Status Code 200) and details of username searched, else (Failed - HTTP Status Code 400), e.g.
  ```json
  {
    "name": "Mark Essien",
    "value": "Great Tech Entrepreneur",
  }
  ```


### Update User

Update the details of a specific user.

- **URL**: `/api/:user_name` Where `:user_name` should be replaced with the **`CURRENT`** name of the already existing user.
- **Method**: `PUT`
- **Request**:

  ```json
  {
    "name": "updated name",
    "value": "updated value"
  }
  ```
- **Response**: If successfully updated, (Success - HTTP Status Code 200) and details of new user is returned, else (Failed - HTTP Status Code 400)
  ```json
  {
    "name": "updated name",
    "value": "updated value"
  }
  ```

### Delete User

Deletes a user's record.

- **URL**: `/api/:user_name`
- **Method**: `DELETE`
- **Request**: None
- **Response** (Success - HTTP Status Code 200), details of user that has been deleted.

## Installation On Local Server

1. Clone this repository:

   ```bash
   git clone https://github.com/samuelIkoli/hngxTask2.git
   ```

2. Change to the project directory:

   ```bash
   cd hngxTask2
   ```

3. Install the required dependencies:

   ```bash
   npm install or yarn install
   ```

4. Start the server:

   ```bash
   npm start or yarn start
   ```

## Testing

Run the command:

```bash
npm run test or yarn test
```
