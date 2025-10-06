function Gallery() {
  return (
    <div className="container mt-4">
      <h2>Gallery</h2>
      <div className="row">
        <div className="col-md-4 mb-3">
          <img src="https://via.placeholder.com/300" alt="PNC 1" className="img-fluid rounded" />
        </div>
        <div className="col-md-4 mb-3">
          <img src="https://via.placeholder.com/300" alt="PNC 2" className="img-fluid rounded" />
        </div>
        <div className="col-md-4 mb-3">
          <img src="https://via.placeholder.com/300" alt="PNC 3" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
}
export default Gallery;
