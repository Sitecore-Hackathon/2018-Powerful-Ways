import Navigation from "./components/Navigation";
import Article from "./components/Article";

const components = new Map();
components.set("Navigation", Navigation);
components.set("Article", Article);

const componentFactory = componentName => {
  return components.get(componentName);
};

export default componentFactory;
