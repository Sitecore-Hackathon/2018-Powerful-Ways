import React from "react";
import PropTypes from "prop-types";
import { Text } from "@sitecore-jss/sitecore-jss-react";

const Navigation = ({ fields }) => (
  <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
    <div className="container-fluid">

      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#main-navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="/">
          <Text tag="span" field={fields.title} />
        </a>
      </div>

      <div className="collapse navbar-collapse" id="main-navbar">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="">
              <Text tag="span" field={fields.items} />
            </a>
          </li>
        </ul>
      </div>

      <div className="avatar-container">
        <div className="avatar-img-border">
          <a href="/">
            <span className="avatar-img" />
          </a>
        </div>
      </div>

    </div>
  </nav>
);

Navigation.propTypes = {
  fields: PropTypes.shape({
    title: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string
    }),
    items: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string
    })
  })
};

export default Navigation;
