# API Documentation

This document provides documentation for the API endpoints along with expected request and response examples.

## Table of Contents

- [Person Endpoints](#person-endpoints)

  - [Get All Persons](#get-all-persons)
  - [Get Person by Name](#get-person-by-name)
  - [Create Person](#create-person)
  - [Update Person](#update-person)
  - [Delete Person](#delete-person)

- [Installation](#installation-on-local-server)
- [Testing](#testing)

---

## Person Endpoints

### Get All Persons

Retrieve a list of all persons.

- **URL**: `/api`
- **Method**: `GET`
- **Request**: None
- **Response**:

  ```json
  [
    {
      "_id": "64fe1faa404fb9679375e69d",
      "name": "BK Ole",
      "date_joined": "2023-09-10T19:57:30.298Z"
    },
    {
      "_id": "64fe1f88404fb9679375e696",
      "name": "Craving Mik",
      "date_joined": "2023-09-10T19:56:56.286Z"
    },
    {
      "_id": "64fe1f7b404fb9679375e692",
      "name": "Charles Babbage",
      "date_joined": "2023-09-10T19:56:43.588Z"
    },
    {
      "_id": "64fe1f74404fb9679375e68f",
      "name": "Michael Loaw",
      "date_joined": "2023-09-10T19:56:36.610Z"
    },
    {
      "_id": "64fe1f6c404fb9679375e68c",
      "name": "John Doe",
      "date_joined": "2023-09-10T19:56:28.059Z"
    }
  ]
  ```

### Create Person

Create a new person record.

- **URL**: `/api`
- **Method**: `POST`
- **Request**:

  ```json
  {
    "name": "Nkem B"
  }
  ```

- **Response** (Success - HTTP Status Code 204):
  No response body

### Get Person By Name

Retrieve details of a specific person by their name.

- **URL**: `/api/:name`
- **Method**: `GET`
- **Request**: None
- **Response**:

  ```json
  {
    "_id": "64fe3d2ecc4b0ccbbb88ea8c",
    "name": "Nkem Benjamin",
    "date_joined": "2023-09-10T22:03:26.081Z"
  }
  ```

### Update Person

Update the details of a specific person.

- **URL**: `/api/:name` Where `:name` should be replaced with the **`CURRENT`** name of the already existing person.
- **Method**: `PUT`
- **Request**:

  ```json
  {
    "name": "New/Updated Name"
  }
  ```

### Delete Person

Delete a person record.

This section explains how to delete a person record using a `DELETE` request to the `/api/:id` endpoint. A successful deletion will result in an HTTP status code of 204 (No Content), and there will be no response body.

- **URL**: `/api/:name`
- **Method**: `DELETE`
- **Request**: None
- **Response** (Success - HTTP Status Code 204 No Content):

## Installation On Local Server

1. Clone this repository:

   ```bash
   git clone https://github.com/benjaminnkem/hngx-person-api.git
   ```

2. Change to the project directory:

   ```bash
   cd hngx-person-api
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
