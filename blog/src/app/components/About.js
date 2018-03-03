import React from "react";
import PropTypes from "prop-types";
import { Text, RichText } from "@sitecore-jss/sitecore-jss-react";

const About = ({ fields }) => (
  <div>
    <header className="header-section">
      <div className="intro-header no-img">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <div className="page-heading">
                <Text tag="h1" field={fields.title} />
                <hr className="small" />
                <Text tag="span" className="page-subheading" field={fields.subtitle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="container" role="main">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <RichText field={fields.body} />
        </div>
      </div>
    </div>
  </div>
);

About.propTypes = {
  routeFields: PropTypes.shape({
    title: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string
    }),
    subtitle: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string
    }),
    body: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string
    })
  })
};

export default About;