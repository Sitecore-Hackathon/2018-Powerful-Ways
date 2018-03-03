import React from "react";

const Footer = ({ fields }) => (
  <footer>
    <div class="container beautiful-jekyll-footer">
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <ul class="list-inline text-center footer-links">
            <li>
              <a href="https://github.com/jflheureux" title="GitHub">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/jflh" title="Twitter">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/jflheureux" title="LinkedIn">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://stackoverflow.com/users/4891689/jflheureux" title="StackOverflow">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-stack-overflow fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.jflh.ca/feed.xml" title="RSS">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-rss fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
          <p class="copyright text-muted">
            Jean-François L'Heureux
            &nbsp;•&nbsp;
            2018
            &nbsp;•&nbsp;
            <a href="https://www.jflh.ca">www.jflh.ca</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;