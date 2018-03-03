import React from "react";
import PropTypes from "prop-types";
import { Text, RichText } from "@sitecore-jss/sitecore-jss-react";
import ArticlePreview from "./ArticlePreview";

class ArticleList extends React.Component {
  render() {
    const articles = this.props.fields.items.map(function(article) {
      return <ArticlePreview key={article.id} fields={article.fields} />
    });

    return (
      <div>
        <div className="intro-header"></div>
        <div className="container" role="main">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <img className="center-block" src="https://www.jflh.ca/img/title.png" alt="Keep Calm and Write Code" />
              <div className="posts-list">
                {articles}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ArticleList.propTypes = {
  fields: PropTypes.shape({
    items: PropTypes.shape({
      value: PropTypes.array,
      editable: PropTypes.array
    })
  })
};

export default ArticleList;