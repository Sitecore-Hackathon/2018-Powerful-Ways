import React from "react";
import PropTypes from "prop-types";
import { Text, RichText } from "@sitecore-jss/sitecore-jss-react";

const ArticleList = ({ fields }) => (
  <div>
    <div className="intro-header"></div>
    <div className="container" role="main">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <img className="center-block" src="https://www.jflh.ca/img/title.png" alt="Keep Calm and Write Code" />
          <div className="posts-list">
            <article className="post-preview">
              <a href="/article">
                <h2 className="post-title">How to Prepare for the Sitecore Hackathon in Powerful Ways</h2>
              </a>
              <p className="post-meta">
                Posted on February 28, 2018 by Jean-François L'Heureux
              </p>
              <p className="post-meta">
                Tags: Hackathon|Sitecore
              </p>
              <div className="post-entry">
                <p>
                  <img src="http://www.sitecorehackathon.org/wp-content/uploads/2017/01/Sitecore-Hackathon-logo-small-own-it.png" alt="Sitecore Hackathon" className="center-image" />
                </p>
                <p>Preparation is key for a 24 hours hackathon event. You do not want to lose time on setup or tooling. You want to use those precious hours to code and be creative.</p>
                <p>In this post, I cover how I prepared for the 2018 Sitecore hackathon.</p>
                <a href="/article" className="post-read-more">[Read&nbsp;More]</a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ArticleList.propTypes = {
  fields: PropTypes.shape({
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

export default ArticleList;