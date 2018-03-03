import React from "react";
import PropTypes from "prop-types";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";
import componentFactory from "./componentFactory";

import css from "assets/css/main.css";

const App = ({ route }) => <Placeholder name="main" rendering={route} />;

App.propTypes = {
  route: PropTypes.object
};

export default App;
