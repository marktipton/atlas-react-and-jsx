import React from "react";
import linkedIn from '../assets/linkedin.svg';
import  github from '../assets/github.svg';

export function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/marktipton1/" target="_blank" rel="noopener noreferrer">
        <img src={linkedIn} alt="linkedin" />
      </a>
      <a href="https://github.com/marktipton/atlas-react-and-jsx" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="github" />
      </a>
    </div>
  );
}