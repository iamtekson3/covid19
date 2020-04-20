import React from "react";

function About() {
  return (
    <div>
      <div className="display-4 text-info">About</div>
      <p className="lead">
        This is the <span className="text-danger">COVID19</span> data platform
      </p>
      <p className="text-secondary">
        Version <code>1.0.0</code>
      </p>
    </div>
  );
}

export default About;
