
# NESTjs CRUD API Documentation

## Overview

This API provides CRUD operations for managing users and their associated wallet addresses. The project uses NESTjs framework and Prisma ORM for database interactions.

## Base URL

```
http://localhost:3000
```

## Authentication

No authentication required for this API.

## Endpoints

### Users

1. **Create User**
   - **URL:** `/users`
   - **Method:** `POST`
   - **Description:** Create a new user.
   - **Unique Fields:** `email`
   - **Request Body:**
     ```json
     {
       "username": "string",
       "email": "string",
       "password": "string"
     }
     ```
   - **Responses:**
     - `201 Created`: User created successfully.
     - `400 Bad Request`: Invalid input data.

2. **Get All Users**
   - **URL:** `/users`
   - **Method:** `GET`
   - **Description:** Get all users with their wallet addresses.
   - **Responses:**
     - `200 OK`: Returns a list of users with their wallet addresses.

3. **Get User by ID**
   - **URL:** `/users/:id`
   - **Method:** `GET`
   - **Description:** Get a user by ID with their wallet addresses.
   - **URL Parameters:**
     - `id`: User ID.
   - **Responses:**
     - `200 OK`: Returns the user with specified ID and their wallet addresses.
     - `404 Not Found`: User not found.

4. **Update User**
   - **URL:** `/users/:id`
   - **Method:** `PATCH`
   - **Description:** Update a user by ID.
   - **URL Parameters:**
     - `id`: User ID.
   - **Request Body:**
     ```json
     {
       "username": "string",
       "email": "string",
       "password": "string"
     }
     ```
   - **Responses:**
     - `200 OK`: User updated successfully.
     - `404 Not Found`: User not found.

5. **Delete User**
   - **URL:** `/users/:id`
   - **Method:** `DELETE`
   - **Description:** Delete a user by ID.
   - **URL Parameters:**
     - `id`: User ID.
   - **Responses:**
     - `200 OK`: User deleted successfully.
     - `404 Not Found`: User not found.

### Wallet Addresses

1. **Create Wallet Address**
   - **URL:** `/wallet-address`
   - **Method:** `POST`
   - **Description:** Create a new wallet address.
   - **Request Body:**
     ```json
     {
       "address": "string",
       "userId": "number"
     }
     ```
   - **Responses:**
     - `201 Created`: Wallet address created successfully.
     - `400 Bad Request`: Invalid input data.

2. **Get All Wallet Addresses**
   - **URL:** `/wallet-address`
   - **Method:** `GET`
   - **Description:** Get all wallet addresses with user details.
   - **Responses:**
     - `200 OK`: Returns a list of wallet addresses with user details.

3. **Get Wallet Address by ID**
   - **URL:** `/wallet-address/:id`
   - **Method:** `GET`
   - **Description:** Get a wallet address by ID with user details.
   - **URL Parameters:**
     - `id`: Wallet address ID.
   - **Responses:**
     - `200 OK`: Returns the wallet address with specified ID and user details.
     - `404 Not Found`: Wallet address not found.

4. **Update Wallet Address**
   - **URL:** `/wallet-address/:id`
   - **Method:** `PATCH`
   - **Description:** Update a wallet address by ID.
   - **URL Parameters:**
     - `id`: Wallet address ID.
   - **Request Body:**
     ```json
     {
       "address": "string",
       "userId": "number"
     }
     ```
   - **Responses:**
     - `200 OK`: Wallet address updated successfully.
     - `404 Not Found`: Wallet address not found.

5. **Delete Wallet Address**
   - **URL:** `/wallet-address/:id`
   - **Method:** `DELETE`
   - **Description:** Delete a wallet address by ID.
   - **URL Parameters:**
     - `id`: Wallet address ID.
   - **Responses:**
     - `200 OK`: Wallet address deleted successfully.
     - `404 Not Found`: Wallet address not found.

## Error Handling

- **400 Bad Request:** The request was invalid. This could be due to malformed JSON or missing required fields.
- **404 Not Found:** The specified resource was not found.
- **500 Internal Server Error:** An unexpected error occurred on the server.

## Unique Fields

- **Users Table:**
  - `email` (Unique)

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository_url>
   cd nestjs-crud
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure the Database**
   - Update the database connection string in the `.env` file:
     ```
     DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<database_name>?schema=public"
     ```

4. **Generate Prisma Client**
   ```bash
   npx prisma generate
   ```

5. **Run Database Migrations**
   ```bash
   npx prisma migrate dev --name init
   ```

6. **Start the Application**
   ```bash
   npm run start
   ```

7. **Access Swagger Documentation**
   - Open your browser and navigate to `http://localhost:3000/api` to view and interact with the API documentation using Swagger UI.

## Managing with PM2

1. **Install PM2 (if not already installed):**
   ```bash
   npm install -g pm2
   ```

2. **Start the NESTjs application with PM2:**
   ```bash
   cd /path/to/your/nestjs-crud
   pm2 start npm --name "nestjs-crud" -- run start
   ```

3. **Check the status and logs:**
   ```bash
   pm2 status
   pm2 logs nestjs-crud
   ```

4. **Manage the application:**
   ```bash
   pm2 stop nestjs-crud
   pm2 restart nestjs-crud
   pm2 delete nestjs-crud
   pm2 save
   pm2 startup
   ```

## Conclusion

This documentation covers the basic setup and usage of the CRUD API for managing users and wallet addresses using NESTjs and Prisma ORM. Make sure to follow the setup instructions carefully to run the application and test the endpoints using Swagger UI or any API client like Postman.
