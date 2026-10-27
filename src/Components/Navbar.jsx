
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 mb-4">
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          StudentPortal
        </Link>

        {/* Hamburger button: mobile screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible links and search */}
        <div className="collapse navbar-collapse" id="navbarContent">

          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>

            <Link className="nav-link" to="/students">
              Students
            </Link>

            <Link className="nav-link" to="/courses">
              Courses
            </Link>

            <Link className="nav-link" to="/profile">
              Student Profile
            </Link>
            
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </div>

          {/* Search
          <form
            className="d-flex gap-2 mt-2 mt-lg-0"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />

            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form> */}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
