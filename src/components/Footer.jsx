import "./styles/footer.css";

const arrow = <i class="fa-solid fa-chevron-right" style={{ color: "blue" }} />;

export default function Footer() {
  return (
    <footer className="pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 className="title">John Doe</h5>
            <p className="text">
              123 Rue de la Révolution
              <br />
              75001 Paris, France
              <br />
              +33 1 23 45 67 89
            </p>
            <div>
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="fab fa-github fa-lg mr-3"
                  style={{ color: "black" }}
                />
              </a>
              <a
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="fab fa-twitter fa-lg"
                  style={{ color: "black" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/johndoe"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="fab fa-linkedin fa-lg"
                  style={{ color: "black" }}
                />
              </a>
            </div>
          </div>

          <div className="col-md-3">
            <h5 className="title">Liens utiles</h5>
            <ul className="list-unstyled">
              <li className="text">
                <a href="/">{arrow} Accueil</a>
              </li>
              <li className="text">
                <a href="/#about">{arrow} A propos</a>
              </li>
              <li className="text">
                <a href="/services">{arrow} Services</a>
              </li>
              <li className="text">
                <a href="/contact">{arrow} Me contacter</a>
              </li>
              <li className="text">
                <a href="/legals">{arrow} Mentions légales</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="title">Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li className="text">
                <a href="/portfolio">{arrow} Fresh Food</a>
              </li>
              <li className="text">
                <a href="/portfolio">{arrow} Restaurant Akira</a>
              </li>
              <li className="text">
                <a href="/portfolio">{arrow} Espace bien-être</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="title">Mes derniers articles</h5>
            <ul className="list-unstyled">
              <li className="text">
                <a href="/blog">{arrow} Coder son site en HTML/CSS</a>
              </li>
              <li className="text">
                <a href="/blog">{arrow} Vendre ses produits sur le web</a>
              </li>
              <li className="text">
                <a href="/blog">{arrow} Se positionner sur Google</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom d-flex align-items-center justify-content-center p-3">
        <p className="m-0">Designed by John Doe</p>
      </div>
    </footer>
  );
}
