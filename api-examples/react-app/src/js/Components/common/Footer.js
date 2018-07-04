import React from "react";

const Footer = props => {
  return (
    <footer className="blog-footer">
      <p>
        {props.desc}
        <a href="http://satishborkar.github.io/profile">GitHub Profile</a> by{" "}
        <a href="https://www.linkedin.com/in/satishborkar">@LinkedIn</a>.
      </p>
      <p>
        <a href="#">Back to top</a>
      </p>
    </footer>
  );
};

export default Footer;
