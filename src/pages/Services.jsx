import { ServiceCard } from "../components/ServiceCard";
import TopPage from "../components/TopPage";

const services = [
  {
    name: "UX DESIGN",
    description: (
      <>
        <strong>L'UX Design</strong> est une méthode de conception centrée sur
        l'utilisateur. Son but est d'offrir une expérience de navigation
        optimale à l'internaute.
      </>
    ),
    icon: "fa-solid fa-display",
  },
  {
    name: "DÉVELOPPEMENT WEB",
    description: (
      <>
        <strong>Le développement de sites web</strong> repose sur l'utilisateur
        des langages HTML, CSS, JavaScript et PHP.
      </>
    ),
    icon: "fa-solid fa-file-code",
  },
  {
    name: "RÉFÉRENCEMENT",
    description: (
      <>
        <strong>Le référencement naturel d'un site</strong>, aussi appelé SEO,
        consiste à mettre des techniques en oeuvre pour améliorer sa position
        dans les résultats des moteurs de recherche.
      </>
    ),
    icon: "fa-solid fa-magnifying-glass-dollar",
  },
];

export default function Services() {
  return (
    <div>
      <TopPage
        title={"MON OFFRE DE SERVICES"}
        description={"Voici les prestations sur lesquelles je peux intervenir."}
      />
      <div className="services mt-5">
        <div className="container-fluid">
          <div className="row">
            {services.map((service, index) => (
              <div className="service col-12 col-md mb-3 ">
                <ServiceCard
                  name={service.name}
                  description={service.description}
                  icon={service.icon}
                  key={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
