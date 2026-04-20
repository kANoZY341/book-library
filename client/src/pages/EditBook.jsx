import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBookById, updateBook } from "../services/api";

const initialForm = {
  title: "",
  author: "",
  genre: "",
  year: "",
  description: ""
};

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadBook() {
      try {
        setLoading(true);
        setError("");
        const book = await getBookById(id);
        setFormData({
          title: book.title || "",
          author: book.author || "",
          genre: book.genre || "",
          year: book.year || "",
          description: book.description || ""
        });
      } catch (err) {
        setError(err.message || "Failed to load book.");
      } finally {
        setLoading(false);
      }
    }

    loadBook();
  }, [id]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setSaving(true);
      setError("");
      await updateBook(id, {
        ...formData,
        year: Number(formData.year)
      });
      navigate(`/books/${id}`);
    } catch (err) {
      setError(err.message || "Failed to update book.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <p>Loading book...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <section className="card">
      <h2>Update Book</h2>
      <form className="book-form" onSubmit={handleSubmit}>
        <label>
          Title
          <input name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <label>
          Author
          <input name="author" value={formData.author} onChange={handleChange} required />
        </label>
        <label>
          Genre
          <input name="genre" value={formData.genre} onChange={handleChange} required />
        </label>
        <label>
          Year
          <input name="year" type="number" value={formData.year} onChange={handleChange} required />
        </label>
        <label>
          Description
          <textarea name="description" value={formData.description} onChange={handleChange} rows="4" />
        </label>

        <button className="btn update" type="submit" disabled={saving}>
          {saving ? "Updating..." : "Save Changes"}
        </button>
      </form>
    </section>
  );
}

export default EditBook;

