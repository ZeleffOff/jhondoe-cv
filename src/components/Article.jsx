export default function Article({ name, description, image, publishDate }) {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body d-flex flex-column align-items-start justify-content-between">
        <h5 className="card-title title">{name}</h5>
        <p className="card-text text">{description}</p>
        <a href="#" className="btn btn-primary">
          Lire la suite
        </a>
      </div>

      <div className="card-footer">
        <div className="card-text text">Publié le {publishDate}</div>
      </div>
    </div>
  );
}
