import React from "react";

const Footer = props => {
  return (
    <footer className="blog-footer">
      <p>
        {props.desc}
        <a href="http://JonDoe.github.io/profile">GitHub Profile</a> by{" "}
        <a href="https://www.linkedin.com/in/JonDoe">@LinkedIn</a>.
      </p>
      <p>
        <a href="#">Back to top</a>
      </p>
    </footer>
  );
};

export default Footer;
