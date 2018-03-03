import React from "react";
import PropTypes from "prop-types";
import { Text, RichText } from "@sitecore-jss/sitecore-jss-react";

class ArticlePreview extends React.Component {
  render() {
    const articleUrl = "/articles/" + this.props.article.name;

    return (
      <article className="post-preview">
        <a href={articleUrl}>
          <Text tag="h2" className="post-title" field={this.props.article.fields.title} />
        </a>
        <p className="post-meta">
          Posted on <Text tag="span" field={this.props.article.fields.date} /> by <Text tag="span" field={this.props.article.fields.author} />
        </p>
        <p className="post-meta">
          Tags: <Text tag="span" field={this.props.article.fields.tags} />
        </p>
        <div className="post-entry">
          <RichText field={this.props.article.fields.intro} />
          <a href={articleUrl} className="post-read-more">[Read&nbsp;More]</a>
        </div>
      </article>
    );
  }
}

ArticlePreview.propTypes = {
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
    })
  })
};

export default ArticlePreview;