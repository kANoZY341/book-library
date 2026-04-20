# Lab 11 Review Questions Answers

## 1) Role of each layer in three-tier architecture and why browser does not connect directly to MongoDB
In a three-tier app, the presentation layer is the frontend UI (React), the logic layer is the backend server (Express), and the data layer is the database (MongoDB). The browser should not connect directly to MongoDB because that would expose credentials, reduce security, and skip backend validation/business rules.

## 2) What REST API is
A REST API is a way for client and server to communicate over HTTP using resource-based URLs and standard methods like GET, POST, PUT, and DELETE.

## 3) Difference between GET and POST
GET is used to read/fetch data. POST is used to create new data on the server.

## 4) When to use PUT vs DELETE
Use PUT when you want to update existing data. Use DELETE when you want to remove data.

## 5) What Mongoose does vs native MongoDB driver
Mongoose provides schemas, models, validation, and cleaner structure for MongoDB documents. The native MongoDB driver is lower-level and gives direct database operations without those built-in schema/model features.

## 6) What Schema and Model are
A Schema defines the shape/rules of a document (fields and validation). A Model is the object built from that schema that you use to query and modify data in MongoDB.

## 7) What `{ timestamps: true }` does
It automatically adds and maintains `createdAt` and `updatedAt` fields for each document.

## 8) Purpose of .env and dotenv
`.env` stores environment-specific values like database URI and port. `dotenv` loads those values into `process.env` in Node.js.

## 9) Why .env should be in .gitignore
Because it contains sensitive data (like connection strings and secrets) and should not be pushed to GitHub.

## 10) What CORS is
CORS (Cross-Origin Resource Sharing) is a browser security rule that controls whether one origin can access resources from another origin.

## 11) Why `cors()` middleware and Vite proxy are needed
`cors()` allows frontend requests from a different origin during development. Vite proxy helps by forwarding `/api` calls to the backend, so frontend code stays clean and avoids common cross-origin issues.

## 12) What `useEffect` with `[]` means
It runs once after the component first renders, similar to componentDidMount behavior.

## 13) What happens if dependency array is forgotten
The effect runs after every render. If it updates state, it can cause repeated rerenders or even infinite loops.

## 14) Compare client-side filtering of static data vs server-side filtering with MongoDB for larger datasets
Client-side filtering is okay for small static arrays because everything is already in memory. For larger datasets, server-side filtering is better because MongoDB can query efficiently, return only needed records, reduce bandwidth, and improve performance.

