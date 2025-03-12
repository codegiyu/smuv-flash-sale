# Project: Smuv Flash Sale
Smuv Backend Developer Assessment: Flash Sale System. Built with Express, Typescript, MongoDB and Mongoose
# 📁 Collection: Auth 


## End-point: Register
### Method: POST
>```
>https://giyushop.onrender.com/v1/auth/register
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
    "fullName": "Eddy Giyu",
    "userName": "Tomioka",
    "password": "codegiyu670",
    "role": "user"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# E-commerce API Documentation

A robust RESTful API for e-commerce operations including user management, product catalog, order processing, and more.
[Base URL](https://e-commerce-backend-mini-1.onrender.com/v1)

## 📑 Table of Contents

- [Authentication](#authentication)
- [Response formats](#response-formats)

## 🔐 Authentication

| Endpoint        | Method | Description          | Auth Required |
| --------------- | ------ | -------------------- | ------------- |
| `/auth/session` | GET    | Get current session  | No            |
| `/auth/signup`  | POST   | Register new user    | No            |
| `/auth/login`   | POST   | Authenticate user    | No            |
| `/auth/logout`  | POST   | End session          | Yes           |
| `/auth/refresh` | POST   | Refresh access token | No            |

### Request Examples

**Sign Up**

```json
POST /auth/signup
{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1234567890"
}
```

**Login**

```json
POST /auth/login
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```


## 📋 Response formats

### success Response Format

```json
{
  "success": true,
  "data": {},
  "message": "An action succesful message"
}
```

### failure Response Format

```json
{
  "success": false,
  "message": "An Error message"
}
```