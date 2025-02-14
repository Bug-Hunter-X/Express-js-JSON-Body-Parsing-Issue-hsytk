# Express.js JSON Body Parsing Bug

This repository demonstrates a common error in Express.js applications where JSON request bodies are not parsed correctly.  The bug arises from a misunderstanding or misconfiguration of the `express.json()` middleware.

## Bug Description

The provided code snippet shows a simple Express.js app designed to handle POST requests to the `/users` endpoint. The expectation is that the request body will contain a JSON object representing a new user.  However, due to a potential error in how `express.json()` is used, the `req.body` might be empty or contain unexpected data, leading to errors or unexpected behavior.

## Solution

The solution addresses this by ensuring proper usage of `express.json()` and adding error handling.