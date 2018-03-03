// import the babel polyfill here instead of via webpack entry point.
// otherwise, babel-preset-env will essentially try to load babel-polyfill a second time, which is a big no-no.
import "babel-polyfill";
import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { SitecoreContext } from "@sitecore-jss/sitecore-jss-react";
import componentFactory from "../app/componentFactory";
import SitecoreContextFactory from "./SitecoreContextFactory";
import RouteHandler from "./RouteHandler";
import NotFound from "../app/NotFound";

// Powerful Ways: Added the Router from https://github.com/Sitecore/jss/blob/master/samples/basic-sample-react-graphql/src/boot/Root.js
const Root = ({ initialState, path, Router }) => (
  <SitecoreContext
    componentFactory={componentFactory}
    contextFactory={SitecoreContextFactory}
  >
    <Router location={path} context={{}}>
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <RouteHandler initialState={initialState} route={props} />
          )}
        />
        <Route
          path="/**"
          render={props => (
            <RouteHandler initialState={initialState} route={props} />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </SitecoreContext>
);

Root.propTypes = {
  initialState: PropTypes.object,
  children: PropTypes.node
};

export default Root;
