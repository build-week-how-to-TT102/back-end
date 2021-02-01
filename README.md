# How-To Backend API

## Dependencies
express, knex, sqlite3, pg, nodemon, dotenv cross-env, cors
bcryptjs, jsonwebtoken, jest, supertest

# API Documentation

Base url: https://build-week-how-to-tt102.herokuapp.com/  
Routes marked with *(required)* require Authorizaton header set with JWT

## Endpoints

### **[GET] {baseURL}/**
Base endpoint; Can be used to check if server is up

Returns:
```
"Welcome to the Server"
```

### **[POST] /api/auth/register**
Registers a new user

Accepts: 

    {
        username,
        password,
    }

Returns:

    {
        username,
        id
    }

### **[POST] /api/auth/login**
Logs in a user

Accepts:

    {
        username,
        password
    }


Returns:

    {
        token: jwtToken,
        message: "welcome ${username}"
    }
