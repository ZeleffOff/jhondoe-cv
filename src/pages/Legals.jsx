import TopPage from "../components/TopPage";

export default function Legals() {
  return (
    <div>
      <TopPage title={"MENTIONS LEGALES"} />

      <div className="accordion mx-3" id="editeur">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Editeur du site
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <h2 className="title" style={{ fontWeight: "bold" }}>
                John Doe
              </h2>
              <p className="text" style={{ fontWeight: "bold" }}>
                <i
                  className="fa-solid fa-location-dot"
                  style={{ color: "black" }}
                ></i>{" "}
                40 Rue Laure Diebold
                <br />
                69009 Lyon, France
                <br />
                <i
                  className="fa-solid fa-phone"
                  style={{ color: "black" }}
                ></i>{" "}
                <a href="tel:0620304050">06 20 30 40 50</a>
                <br />
                <i
                  class="fa-solid fa-envelope"
                  style={{ color: "black" }}
                ></i>{" "}
                <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Hébergeur
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <h2 className="title" style={{ fontWeight: "bold" }}>
                Always Data
              </h2>
              <p className="text" style={{ fontWeight: "bold" }}>
                91 rue du Faubourg Saint Honoré
                <br />
                75008 Paris
              </p>

              <span>
                <i class="fa-solid fa-globe" style={{ color: "black" }}></i>{" "}
                <a href="https://alwaysdata.com">www.alwaysdata.com</a>
              </span>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <h2 className="title" style={{ fontWeight: "bold" }}>
                Crédits
              </h2>
              <p className="text">
                Site développé par John Doe, étudiant du CEF.
              </p>
              <p className="text">
                Les images libres de droit sont issues du site{" "}
                <a href="https://pixabay.com">Pixabay</a>.
              </p>

              <span>
                <i class="fa-solid fa-globe" style={{ color: "black" }}></i>{" "}
                <a href="https://alwaysdata.com">www.alwaysdata.com</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
