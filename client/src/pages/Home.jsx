import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="card">
      <h2>Welcome to the Book Library App</h2>
      <p>
        This full-stack app lets you browse books, see details, add new books, update existing books, and
        delete books from MongoDB.
      </p>
      <Link className="btn primary" to="/books">
        Go to Books
      </Link>
    </section>
  );
}

export default Home;

