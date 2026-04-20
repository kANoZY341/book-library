import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBook } from "../services/api";

const initialForm = {
  title: "",
  author: "",
  genre: "",
  year: "",
  description: ""
};

function AddBook() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setSaving(true);
      setError("");
      await createBook({
        ...formData,
        year: Number(formData.year)
      });
      navigate("/books");
    } catch (err) {
      setError(err.message || "Failed to add book.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="card">
      <h2>Add New Book</h2>
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

        {error ? <p className="error">{error}</p> : null}

        <button className="btn primary" type="submit" disabled={saving}>
          {saving ? "Saving..." : "Add Book"}
        </button>
      </form>
    </section>
  );
}

export default AddBook;

