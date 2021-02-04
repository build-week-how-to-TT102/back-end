# How-To Backend API

## Dependencies
express, knex, sqlite3, pg, nodemon, dotenv cross-env, cors
bcryptjs, jsonwebtoken, jest, supertest

# API Documentation

Base url: https://build-week-how-to-tt102.herokuapp.com/  
Routes marked with *(restricted)* require Authorizaton header set with JWT

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

### **[GET] /api/users/:userId** *(restricted)*

Gets an array of how-tos for a user

Returns:

   [

    {
        id: howtoId,
        title: howtoTitle,
        description: howtoDescription
    },

   ]

### **[GET] /api/users/:userId/howtos/:howtoID** *(restricted)*

Gets a how-to by id for a user

Returns:

    {
        id: howtoId,
        title: howtoTitle,
        description: howtoDescription,
        steps: [{
          stepId,
          step_number,
          step_description
        }]
    }

### **[POST] /api/users/:userId** *(restricted)*

Creates a new how-to for a user

Accepts:

    {
      title,
      description,
      steps(array, optional)
    }

Returns:

    {
        id: howtoId,
        title: howtoTitle,
        description: howtoDescription,
        steps: [{
          stepId,
          step_number,
          step_description
        }]
    }

### **[PUT] /api/users/:userId/howtos/:howtoID** *(restricted)*

Updates a how-to by id (does not update steps)

Accepts:

    {
      title: changes,
      description: changes 
    }

Returns:

    {
        id: howtoId,
        title: howtoTitle,
        description: howtoDescription
    }

### **[DELETE] /api/users/:userId/howtos/:howtoID** *(restricted)*

Deletes a how-to by id

Returns:

    {
        message: "How-To has been deleted"
    }


