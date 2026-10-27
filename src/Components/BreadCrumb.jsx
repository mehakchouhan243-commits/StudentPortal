function Breadcrumb() {
  return (
    <div className="bg-dark text-white p-2 px-3 rounded mb-4" style={{ backgroundColor: '#2b3035' }}>
      <small className="text-light">
        <span className="text-secondary">Home</span> / <span className="text-secondary">Students</span> / <strong>Directory</strong>
      </small>
    </div>
  );
}

export default Breadcrumb;