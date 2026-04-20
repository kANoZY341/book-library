import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <h1 className="brand">Book Library</h1>
        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/books/add">Add Book</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

