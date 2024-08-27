import React from "react";
import linkedIn from '../assets/linkedin.svg';
import  github from '../assets/github.svg';

export function SocialLinks() {
  return (
    <div className="social-links">
      <img src={linkedIn} alt="" />

      <img src={github} alt="" />
    </div>
  );
}