export default function ProjectCard({ name, description, image }) {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt="Realisation" />
      <div className="card-body d-flex flex-column align-items-start justify-content-between">
        <h5 className="card-title title">{name}</h5>
        <p className="card-text text">{description}</p>
        <a href="#" className="btn btn-primary">
          Lire la suite
        </a>
      </div>
    </div>
  );
}
