import React from "react";

const Navigation = () => (
  <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
    <div className="container-fluid">

      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#main-navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="/">Keep Calm and Write Code</a>
      </div>

      <div className="collapse navbar-collapse" id="main-navbar">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="/about">About me</a>
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

export default Navigation;