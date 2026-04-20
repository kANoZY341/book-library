import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../services/api";

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadBooks() {
      try {
        setLoading(true);
        setError("");
        const data = await getBooks();
        setBooks(data);
      } catch (err) {
        setError(err.message || "Failed to load books.");
      } finally {
        setLoading(false);
      }
    }

    loadBooks();
  }, []);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <section>
      <h2>All Books</h2>
      {books.length === 0 ? (
        <p>No books found. Add your first book.</p>
      ) : (
        <div className="book-grid">
          {books.map((book) => (
            <Link key={book._id} to={`/books/${book._id}`} className="book-card">
              <h3>{book.title}</h3>
              <p>
                <strong>Author:</strong> {book.author}
              </p>
              <p>
                <strong>Genre:</strong> {book.genre}
              </p>
              <p>
                <strong>Year:</strong> {book.year}
              </p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export default BookList;

