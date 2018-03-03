import React from "react";

// Static footer. Could be eventually driven by Sitecore items.
const Footer = () => (
  <footer>
    <div className="container beautiful-jekyll-footer">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <ul className="list-inline text-center footer-links">
            <li>
              <a href="https://github.com/jflheureux" title="GitHub">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/jflh" title="Twitter">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/jflheureux" title="LinkedIn">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://stackoverflow.com/users/4891689/jflheureux" title="StackOverflow">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-stack-overflow fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
          <p className="copyright text-muted">
            Jean-François L'Heureux
            &nbsp;•&nbsp;
            2018
            &nbsp;•&nbsp;
            <a href="/">www.jflh.ca</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;