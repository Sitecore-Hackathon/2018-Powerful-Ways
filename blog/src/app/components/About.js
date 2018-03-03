import React from "react";

const About = ({ fields }) => (
  <div>
    <header className="header-section">
      <div className="intro-header no-img">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <div className="page-heading">
                <h1>About me</h1>
                <hr className="small" />
                <span className="page-subheading">Why you'd want to read my blog</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="container" role="main">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <p><img src="https://www.jflh.ca/img/jflheureux.png" alt="Sitecore Technology MVP 2018 Logo" className="center-image" /></p>

          <p style={{textAlign: 'justify'}}>
            I am Jean-François L'Heureux, a 33 years old software developer. I've spent half of my life programming now, beginning when I was a teenager. I'm passionate about web programming. Mostly front-end but also back-end. Everyday, I try to learn more and become a better coder. Keeping this blog active is the first step to motivate me to read more on my favorite subjects and put what I learn into practice by writing code.
          </p>

          <p style={{textAlign: 'justify'}}>
            I am working a lot with the Sitecore platform. I have been awarded the Sitecore Technology MVP title since 2017.
          </p>

          <p>
            <a href="https://www.sitecore.com/mvp"><img src="https://www.jflh.ca/img/Sitecore_MVP_logo_Technology_2018.jpg" alt="Sitecore Technology MVP 2018 Logo" /></a>
            <a href="https://www.sitecore.com/mvp"><img src="https://www.jflh.ca/img/Sitecore_MVP_logo_Technology_2017.png" alt="Sitecore Technology MVP 2017 Logo" /></a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;