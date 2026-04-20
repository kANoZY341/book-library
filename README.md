# SWS 215 - Lab 11: Node.js + MongoDB Backend Part II

## Project Overview
This lab is a full-stack Book Library app with:
- React + Vite frontend (`client/`)
- Node.js + Express + MongoDB backend (`server/`)
- Mongoose for MongoDB models and CRUD operations

Features included:
- View all books
- View book details
- Add new book (`/books/add`)
- Update book (`/books/edit/:id`)
- Delete book from detail page

## Tech Stack
- Frontend: React, React Router, Vite
- Backend: Node.js, Express, MongoDB, Mongoose
- Utilities: dotenv, cors, nodemon

## Folder Structure
```text
lab11-nodejs-mongodb-part2/
  client/
  server/
  README.md
  REVIEW_QUESTIONS_ANSWERS.md
  SUBMISSION_CHECKLIST.md
```

## Server Setup
1. Open terminal in `server/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` based on `.env.example`
4. Run server:
   ```bash
   npm run dev
   ```

## Client Setup
1. Open terminal in `client/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run frontend:
   ```bash
   npm run dev
   ```

The Vite dev server uses proxy for `/api` to `http://localhost:5000`.

## Environment Variables
In `server/`, copy `.env.example` to `.env` and update values:
```env
MONGO_URI=your_actual_mongodb_connection_string
PORT=5000
```

## API Endpoints
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/books` | Get all books |
| GET | `/api/books/:id` | Get one book by ID |
| POST | `/api/books` | Create new book |
| PUT | `/api/books/:id` | Update existing book |
| DELETE | `/api/books/:id` | Delete a book |


## Submission Contents
- `client/` source code
- `server/` source code
- `.env.example` (no `.env` committed)
- `REVIEW_QUESTIONS_ANSWERS.md`
- `SUBMISSION_CHECKLIST.md`


