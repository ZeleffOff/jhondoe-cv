import ProjectCard from "../components/ProjectCard";
import TopPage from "../components/TopPage";

const projects = [
  {
    name: "Fresh Food",
    description: "Réalisation d'un site avec commande en ligne.",
    image: "./img/portfolio/fresh-food.jpg",
  },
  {
    name: "Restaurant Akira",
    description: "Réalisation d'un site vitrine.",
    image: "./img/portfolio/restaurant-japonais.jpg",
  },
  {
    name: "Espace bien-être",
    description: "Réalisation d'un site vitrine pour un paticien de bien être.",
    image: "./img/portfolio/espace-bien-etre.jpg",
  },
];

export default function Portfolio() {
  return (
    <div>
      <TopPage
        title={"PORTFOLIO"}
        description={"Voici quelques unes de mes réalisations."}
      />

      <div className="container mt-5">
        <div className="row justify-content-center">
          {projects.map((article, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex justify-content-center">
              <ProjectCard
                name={article.name}
                description={article.description}
                image={article.image}
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
