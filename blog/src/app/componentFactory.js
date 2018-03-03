import Navigation from "./components/Navigation";
import Article from "./components/Article";
import ArticleList from "./components/ArticleList";
import About from "./components/About";
import Footer from "./components/Footer";

const components = new Map();
components.set("Navigation", Navigation);
components.set("Article", Article);
components.set("ArticleList", ArticleList);
components.set("About", About);
components.set("Footer", Footer);

const componentFactory = componentName => {
  return components.get(componentName);
};

export default componentFactory;
