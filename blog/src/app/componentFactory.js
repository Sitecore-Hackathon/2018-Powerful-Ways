import Navigation from "./components/Navigation";
import Article from "./components/Article";
import Footer from "./components/Footer";

const components = new Map();
components.set("Navigation", Navigation);
components.set("Article", Article);
components.set("Footer", Footer);

const componentFactory = componentName => {
  return components.get(componentName);
};

export default componentFactory;
