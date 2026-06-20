# bank-operation-api


# Bank Operation API v1

## Overview

This project is a simple Node.js HTTP Server built without Express.

The goal of this project is to understand:

* HTTP Requests
* HTTP Responses
* Routing
* Status Codes
* JSON APIs
* Dynamic Routes

## Available Routes

### Home Page

GET /

Returns HTML page.

### Health Check

GET /api/health

Response:

```json
{
  "status": "ok"
}
```

### Get All Accounts

GET /api/accounts

Response:

```json
[
  {
    "id": 1,
    "customerId": 1,
    "balance": 5000
  }
]
```

### Get Account By ID

GET /api/accounts/1

Response:

```json
{
  "id": 1,
  "customerId": 1,
  "balance": 5000
}
```

### Get Transactions

GET /api/transactions

## Technologies

* Node.js
* HTTP Module
* File System Module

## Run Project

```bash
npm install
npm start
```

## What I Learned

* Client vs Server
* HTTP Lifecycle
* Request and Response
* Static Routing
* Dynamic Routing
* JSON APIs
* Status Codes
