import Welcome from "./components/Welcome";
import Article from "./components/Article";

const components = new Map();
components.set("Welcome", Welcome);
components.set("Article", Article);

const componentFactory = componentName => {
  return components.get(componentName);
};

export default componentFactory;
