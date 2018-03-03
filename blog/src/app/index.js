import React from "react";
import PropTypes from "prop-types";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";
import componentFactory from "./componentFactory";

// Powerful Ways: Added all imports below
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'assets/css/main.css';

// Powerful Ways: Added static navigation and footer as well as routeFields
const App = ({ route }) => (
  <div>
    <Navigation />
    <Placeholder name="main" rendering={route} routeFields={route.fields} />
    <Footer />
  </div>
);

App.propTypes = {
  route: PropTypes.object
};

export default App;
