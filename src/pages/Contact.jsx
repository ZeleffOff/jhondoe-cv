import TopPage from "../components/TopPage";
import "./styles/contact.css";

export default function Contact() {
  return (
    <div
      className="contact p-4 d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container rounded">
        <TopPage
          title={"ME CONTACTER"}
          description={
            "Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact."
          }
        />

        <div className="row m-2">
          <div className="col mb-3">
            <h1 className="title" style={{ fontWeight: "bold" }}>
              Formulaire de contact
            </h1>
            <hr
              className="border-bottom border-primary"
              style={{ width: "100%", opacity: 1 }}
            />

            <form>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="name"
                  placeholder="Votre nom"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="email"
                  placeholder="Votre addresse email"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="numero"
                  aria-describedby="numero"
                  placeholder="Votre numéro de téléphone"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="sujet"
                  aria-describedby="sujet"
                  placeholder="Sujet"
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Votre message"
                  rows="3"
                ></textarea>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
          <div className="col mb-3 d-flex flex-column">
            <div>
              <h1 className="title" style={{ fontWeight: "bold" }}>
                Mes coordonnées
              </h1>
              <hr
                className="border-bottom border-primary"
                style={{ width: "100%", opacity: 1 }}
              />

              <p className="text" style={{ fontWeight: "bold" }}>
                40 Rue Laure Diebold, 69009 Lyon, France
                <br />
                06 20 30 40 50
              </p>
            </div>

            <div className="map-container h-100">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=manhattan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                style={{
                  border: "0",
                }}
                className="w-100 h-100"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
