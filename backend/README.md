# API Documentation

## requirements

1. Nodejs

## Installation

```bash
git clone repo-name
cd repo-name/backend
npm install
```

*** before start or build make sure rename the .env.sample to .env and fill the env

## Start

```bash
npm start
```

## build

```bash
npm run build
```

## Base URL

The base URL for all API endpoints is: <http://localhost:5000/api>

## Authentication Routes

### Signup

* Endpoint: `POST /api/auth/signup`
* Description: Creates a new user account.
* Request Body:
  * `name` (string): User's name.
  * `email` (string): User's email address.
  * `password` (string): User's password.
* Response:
  * Status 201: User account created successfully.
  * Status 400: Bad request - missing or invalid input data.
  * Status 500: Internal server error.

### Login

* Endpoint: `POST /api/auth/login`
* Description: Logs in a user and returns an authentication token.
* Request Body:
  * `email` (string): User's email address.
  * `password` (string): User's password.
* Response:
  * Status 200: Login successful. Returns the authentication token in the response body.
  * Status 400: Bad request - missing or invalid input data.
  * Status 401: Unauthorized - invalid email or password.
  * Status 500: Internal server error.

### Logout

* Endpoint: `GET /api/auth/logout`
* Description: Logs out a user by clearing the authentication token.
* Response:
  * Status 200: User successfully logged out.
  * Status 500: Internal server error.

## CRM Routes

### Get All CRM Entries

* Endpoint: `GET /api/crm`
* Description: Retrieves all CRM entries.
* Response:
  * Status 200: Returns an array of CRM entries in the response body.
  * Status 500: Internal server error.

### Create CRM Entry

* Endpoint: `POST /api/crm`
* Description: Creates a new CRM entry.

* Request Body:

  * `name` (string): Customer's name.
  * `email` (string): Customer's email address.
  * `password` (string): Customer's password.
  * `phone` (number): Customer
  * `address` (string):Customer
  * `city` (string):Customer
  * `state` (string):Customer
  * `country` (string):Customer
  * `pin` (number):Customer
* Response:
  * Status 201: CRM entry created successfully. Returns the created CRM entry in the response body.
  * Status 400: Bad request - missing or invalid input data.
  * Status 500: Internal server error.
  
### Update CRM Entry
  
* Endpoint: `PUT /api/crm`
* Description: Updates a CRM entry by ID.
* Request Body:
  * `id` (string): ID of the CRM entry to update.
  * Other properties: New values for the CRM entry fields.

* Response:
  * Status 200: CRM entry updated successfully. Returns the updated CRM entry in the response body.
  * Status 400: Bad request - missing or invalid input data.
  * Status 500: Internal server error.

### Delete CRM Entry

* Endpoint: `DELETE /api/crm`
* Description: Deletes a CRM entry by ID.
* Request Body:
  * `id` (string): ID of the CRM entry to delete.
* Response:
  * Status 200: CRM entry deleted successfully.
  * Status 400: Bad request - missing or invalid input data.
  * Status 500: Internal server error.
* Error Responses
  * Status 400: Bad request - missing or invalid input data.
  * Status 401: Unauthorized - invalid email or password or missing authentication token.
  * Status 500: Internal server error.

*** Please note that all API routes require authentication except for the authentication routes (/api/auth/signup and /api/auth/login). Clients should include the authentication token in the request cookies
