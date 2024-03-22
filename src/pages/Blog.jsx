import Article from "../components/Article";
import BasePage from "../components/BasePage";

const articles = [
  {
    name: "Coder son site en HTML/CSS",
    description:
      "Some quick exemple text to build the card title and make up the bulk of the card's content.",
    image: "./img/blog/coder.jpg",
    publishDate: "22 août 2022",
  },
  {
    name: "Vendre ses produits sur le web",
    description:
      "Some quick exemple text to build the card title and make up the bulk of the card's content.",
    image: "./img/blog/croissance.jpg",
    publishDate: "20 août 2022",
  },
  {
    name: "Se positionner sur Google",
    description:
      "Some quick exemple text to build the card title and make up the bulk of the card's content.",
    image: "./img/blog/google.jpg",
    publishDate: "1 aout 2022",
  },
  {
    name: "Coder en responsive design",
    description:
      "Some quick exemple text to build the card title and make up the bulk of the card's content.",
    image: "./img/blog/screens.jpg",
    publishDate: "31 juillet 2022",
  },
  {
    name: "Techniques de référencement",
    description:
      "Some quick exemple text to build the card title and make up the bulk of the card's content.",
    image: "./img/blog/seo.jpg",
    publishDate: "30 juillet 2022",
  },
  {
    name: "Apprendre à coder",
    description:
      "Some quick exemple text to build the card title and make up the bulk of the card's content.",
    image: "./img/blog/technos.png",
    publishDate: "12 juillet 2022",
  },
];

export default function Blog() {
  return (
    <BasePage
      title={"BLOG"}
      description={"Retrouvez ici quelques articles sur le développement web."}
    >
      <div className="container mt-5">
        <div className="row justify-content-center">
          {articles.map((article, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex justify-content-center">
              <Article
                name={article.name}
                description={article.description}
                image={article.image}
                publishDate={article.publishDate}
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
    </BasePage>
  );
}
