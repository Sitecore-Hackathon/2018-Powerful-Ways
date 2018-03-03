import React from "react";
import ReactDOM from "react-dom";
import initialState from "boot/initialState";
import Root from "boot/Root";
import { BrowserRouter } from "react-router-dom";
import SitecoreContentService from "boot/SitecoreContentService";
import SitecoreContextFactory from "boot/SitecoreContextFactory";

/*
  Main entry point to the application when run in a browser (client).
  The render() function is the primary bootstrap.
*/

const render = (state, renderFunc) => {
  // remove when not testing; this is all the data we got to render with
  console.log("state", state);

  // HTML element to place the app into
  const rootElement = document.getElementById("app");

  // render the app
  // Powerful Ways: Added Router attribute
  renderFunc(<Root initialState={state} Router={BrowserRouter} />, rootElement);
};

/*
  SSR Data
  If we're running in a server-side rendering scenario,
  the ServerHtml component will provide the window.__data object
  for us to acquire the initial Layout Service state to run with on the client.

  This enables us to skip a network request to load up the layout data.

  SSR is initiated from server.js.
*/
if (window.__data) {
  SitecoreContentService.setInitialRouteData(window.__data);
}

// render with initial route data
SitecoreContentService.getRouteData(window.location.pathname).then(
  routeData => {
    if (routeData && routeData.sitecore && routeData.sitecore.context) {
      // Powerful Ways: Code added to enable React Router to access any Sitecore item
      SitecoreContextFactory.setSitecoreContext({
        route: routeData.sitecore.route,
        itemId: routeData.sitecore.route.itemId,
        ...routeData.sitecore.context
      });
    }

    return render(
      routeData,
      window.__data ? ReactDOM.hydrate : ReactDOM.render
    );
  }
);
