function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-3 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50 text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Computer Science</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Courses</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Reports</a></li>
            </ul>
          </div>
          <div className="col-md-6 mb-3">
            <h5>Contact Info</h5>
            <p className="text-white-50 mb-1">Contact Us</p>
            <p className="text-white-50 mb-1">+1: 123 456 7890</p>
            <p className="text-white-50 mb-1">trm@studentportal.com</p>
          </div>
        </div>
        <hr className="border-secondary" />
        <p className="text-center text-white-50 small mb-0">
          © 2024 StudentPortal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;