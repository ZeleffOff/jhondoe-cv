export default function TopPage({ title, description }) {
  return (
    <div className="p-3">
      <div className="p-4 mt-3 text-center d-flex flex-column align-items-center justify-content-center">
        <h1 className="title">{title}</h1>
        <p className="text h6 mb-3" style={{ fontWeight: "bold" }}>
          {description}
        </p>
        <hr className="separator" />
      </div>
    </div>
  );
}
