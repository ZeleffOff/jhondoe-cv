import { useEffect, useState } from "react";
import "./styles/navbar.css";

export default function Navbar() {
  const [currentUrl, setCurrentUrl] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentUrl(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="./img/favicon.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${currentUrl === "/" && "active"}`}
                aria-current="page"
                href="/"
              >
                ACCUEIL
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${currentUrl === "/services" && "active"}`}
                href="/services"
              >
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  currentUrl === "/portfolio" && "active"
                }`}
                href="/portfolio"
              >
                REALISATIONS
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${currentUrl === "/blog" && "active"}`}
                href="/blog"
              >
                BLOG
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${currentUrl === "/contact" && "active"}`}
                href="/contact"
              >
                ME CONTACTER
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
