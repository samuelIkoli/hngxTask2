# User API

## Overview

This is an API for managing user resources. Implemented is CRUD operations for Creating, Reading/Fetching, Updating and Deleting user information.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Endpoints](#endpoints)
  - [Examples](#examples)
- [Source Code](#source-code)

## Features

- Create a new user record with details name, and value.
- Retrieve a list of all users or a specific user.
- Update the details of an existing user.
- Delete a user record from the database.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:

- [Node.js](https://nodejs.org/) installed on your machine.

## Installation

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

## Usage

### Endpoints

- **GET /api:** Retrieve a list of all users.
- **GET /api/:name:** Retrieve details of a specific user by their name.
- **POST /api:** Create a new user record.
- **PUT /api/:name:** Update the details of a specific user.
- **DELETE /api/:name:** Delete a user record.

### Examples

### Retrieving a List of All Users

To retrieve a list of all users, make a GET request to the following endpoint:

```bash
GET /users
```

### Retrieving Details of a Specific User

To retrieve details of a specific user by their user_name, make a GET request to the following endpoint, replacing `:user_name` with the user's user_name:

```bash
GET /api/:user_name
```

### Creating a User

To create a new user record, make a POST request to the following endpoint:

```bash
POST /api
```

Set the `Content-Type` header to `application/json`, and include the user's information, name and value in the request body in JSON format, like this:

```json
{  
   "name": "John Doe",
   "value": "value"
}
```

### Updating a User Data

To update an existing user data record, make a PUT request to the following endpoint, replacing `:user_name` with the user's **`CURRENT`** name.

```bash
PUT /api/:user_name
```

Include the new user information name and value in the request body in JSON format, like the one below and also set the `Content-Type` header to `application/json`.

```json
{ "name": "Mark Essien" }
```

### Deleting a User

To delete a user, make a DELETE request to the following endpoint, replacing `:user_name` with the user's name:

```bash
DELETE /api/:user_name
```
## Source Code

[https://github.com/samuelIkoli/hngxTask2](https://github.com/samuelIkoli/hngxTask2)

## UML Diagram
![UML Diagram by Benjamin Nkem](/assets/Uml.png)
