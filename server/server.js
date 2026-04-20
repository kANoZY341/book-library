const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Book = require("./models/Book");
const bookRoutes = require("./routes/books");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/books", bookRoutes);

async function seedBooksIfEmpty() {
  const count = await Book.countDocuments();
  if (count > 0) return;

  await Book.insertMany([
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt, David Thomas",
      genre: "Software Engineering",
      year: 1999,
      description: "A practical guide to software craftsmanship and mindset."
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      genre: "Programming",
      year: 2008,
      description: "Principles and best practices for writing maintainable code."
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self-Improvement",
      year: 2018,
      description: "A framework for building good habits and breaking bad ones."
    }
  ]);
  console.log("Seeded sample books because collection was empty.");
}

async function startServer() {
  try {
    if (!MONGO_URI) {
      throw new Error("MONGO_URI is missing. Add it to server/.env.");
    }

    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB.");

    await seedBooksIfEmpty();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
}

startServer();

