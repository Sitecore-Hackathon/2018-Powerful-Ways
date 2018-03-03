import React from "react";
import PropTypes from "prop-types";
import { Text, RichText } from "@sitecore-jss/sitecore-jss-react";

const Article = ({ routeFields }) => (
  <div>
    <header className="header-section">
      <div className="intro-header no-img">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <div className="post-heading">
                <Text tag="h1" field={routeFields.title} />
                <span className="post-meta">Posted on <Text tag="span" field={routeFields.date} /> by <Text tag="span" field={routeFields.author} /></span>
                <p className="post-meta">
                  Tags: <Text tag="span" field={routeFields.tags} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <article role="main" className="blog-post">
            <RichText field={routeFields.intro} />
            <RichText field={routeFields.body} />
          </article>
        </div>
      </div>
    </div>
  </div>
);

Article.propTypes = {
  routeFields: PropTypes.shape({
    title: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string
    }),
    date: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string
    }),
    author: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string
    }),
    tags: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string
    }),
    intro: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string
    }),
    text: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string
    })
  })
};

export default Article;