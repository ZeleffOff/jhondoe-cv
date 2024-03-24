import ProgressBar from "../components/ProgressBar";
import "./styles/homepage.css";

export default function Homepage() {
  return (
    <div className="homepage">
      <div id="background" className="h-100 w-100"></div>

      <section
        className="hero mb-4 container d-flex align-items-center justify-content-center text-center"
        style={{ minHeight: "100vh" }}
      >
        <div>
          <h1 className="mb-3 display-2" style={{ fontWeight: "bold" }}>
            Bonjour, je suis Jhon Doe
          </h1>
          <h2 className="h4 mb-3" style={{ fontWeight: "bold" }}>
            Développeur web full stack
          </h2>
          <button type="button" className="btn btn-primary">
            En savoir plus
          </button>
        </div>
      </section>

      <section id="about" className="container p-4 rounded">
        <div className="row">
          <div className="col-12 col-md-6">
            <h2 className="title">A propos</h2>
            <hr className="border-bottom border-primary" />
            <p className="text">
              Passionné par l'informatique et les nouvelles technologies, j'ai
              suivi une formation <strong>d'intégrateur-développeur</strong> web
              au CEF. Au cours de cette formation, j'ai pu acquérir des bases
              solies pour travailler dans le domaine du{" "}
              <strong>développement web</strong>.
              <br />
              Basé à Lyon, je suis en recherche d'une alternance au sein d'une
              agence digitale pour consolider ma formation de{" "}
              <strong>développeur web full stack</strong>.
              <br />
              J'accorde une attention particulière à la qualité du code que
              j'écris et je respecte les bonnes pratiques du web.
            </p>
          </div>

          <div className="col-12 col-md-6">
            <img
              className="rounded"
              src="./img/john-doe-about.jpg"
              alt="Jhon Doe"
              width={"100%"}
            />

            <h2 className="title mt-3">Mes compétences</h2>
            <div className="skills row">
              <div className="col-12">
                <h3 className="text h6 mt-3">HTML5 90%</h3>
                <ProgressBar value={90} color={"#dd3446"} />
              </div>
              <div className="col-12">
                <h3 className="text h6 mt-3">CSS3 80%</h3>
                <ProgressBar value={80} color={"#0dcbf1"} />
              </div>
              <div className="col-12">
                <h3 className="text h6 mt-3">JAVASCRIPT 70%</h3>
                <ProgressBar value={70} color={"#fec107"} />
              </div>
              <div className="col-12">
                <h3 className="text h6 mt-3">PHP 60%</h3>
                <ProgressBar value={60} color={"#188754"} />
              </div>
              <div className="col-12">
                <h3 className="text h6 mt-3">REACT 50%</h3>
                <ProgressBar value={50} color={"#0c6ffd"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
