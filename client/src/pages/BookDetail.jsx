import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteBook, getBookById } from "../services/api";

function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    async function loadBook() {
      try {
        setLoading(true);
        setError("");
        const data = await getBookById(id);
        setBook(data);
      } catch (err) {
        setError(err.message || "Failed to load book details.");
      } finally {
        setLoading(false);
      }
    }

    loadBook();
  }, [id]);

  async function handleDelete() {
    if (!window.confirm("Are you sure you want to delete this book?")) {
      return;
    }

    try {
      setDeleting(true);
      await deleteBook(id);
      navigate("/books");
    } catch (err) {
      setError(err.message || "Failed to delete book.");
    } finally {
      setDeleting(false);
    }
  }

  if (loading) return <p>Loading book details...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!book) return <p>Book not found.</p>;

  return (
    <section className="card">
      <h2>{book.title}</h2>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Genre:</strong> {book.genre}
      </p>
      <p>
        <strong>Year:</strong> {book.year}
      </p>
      <p>
        <strong>Description:</strong> {book.description || "No description provided."}
      </p>

      <div className="actions">
        <Link className="btn" to="/books">
          Back to Books
        </Link>
        <button className="btn update" onClick={() => navigate(`/books/edit/${id}`)}>
          Update Book
        </button>
        <button className="btn delete" onClick={handleDelete} disabled={deleting}>
          {deleting ? "Deleting..." : "Delete Book"}
        </button>
      </div>
    </section>
  );
}

export default BookDetail;

