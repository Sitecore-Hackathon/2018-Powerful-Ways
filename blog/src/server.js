/* global __BUNDLE_OUTPUT_PATH__ */

import React from "react";
import ReactDOM from "react-dom/server";
import initialState from "boot/initialState";
import Root from "boot/Root";
import { StaticRouter } from 'react-router-dom';
import SitecoreContentService from "boot/SitecoreContentService";
import SitecoreContextFactory from "boot/SitecoreContextFactory";
import ServerHtml from "app/ServerHtml";

/*
  Main entry point to the application when run on a Node server.
  The renderView() function will be invoked by Sitecore's view engine
  to provide the data to render with.
*/

export function renderView(callback, path, data, viewBag) {
  try {
    // push the server-provided state into the data provider
    const state = parseServerData(data, viewBag);
    SitecoreContentService.setInitialRouteData(state);

    // get the route data and then render from it
    SitecoreContentService.getRouteData(path)
      // render the app to a string using Apollo Client's SSR helper (waits for all GraphQL queries to complete)
      .then(routeData => {
        // Powerful Ways: Code added to enable React Router to access any Sitecore item
        SitecoreContextFactory.setSitecoreContext({
          route: routeData.sitecore.route,
          itemId: routeData.sitecore.route.itemId,
          ...routeData.sitecore.context
        });

        // Powerful Ways: Added Router attribute
        return <Root initialState={routeData} path={path} Router={StaticRouter} />;
      })
      .then(content => {
        // wrap the app content in a HTML shell (ServerHtml), and return it to the server
        const result = {
          html: null,
          status: 200,
          redirect: null
        };

        // <ServerHtml> is the HTML wrapper (head, etc) around the app contents when SSR-ing
        result.html = ReactDOM.renderToString(
          <ServerHtml
            component={content}
            initialState={state}
            distPath={__BUNDLE_OUTPUT_PATH__}
          />
        );
        callback(null, result);
      })
      .catch(error => {
        // signals the server that we had an error rendering
        callback(error, null);
      });
  } catch (err) {
    // need to ensure the callback is always invoked no matter what
    // or else SSR will hang
    callback(err, null);
  }
}

function parseServerData(data, viewBag) {
  /*
    Data from server is double-encoded since MS JSS does not allow control
    over JSON serialization format.
  */
  const parsedData = data instanceof Object ? data : JSON.parse(data);
  const parsedViewBag =
    viewBag instanceof Object ? viewBag : JSON.parse(viewBag);

  const state = initialState();
  state.viewBag = parsedViewBag;

  if (parsedData) {
    state.sitecore = parsedData.sitecore;
  }

  return state;
}
