import React from "react";
import { Greeting } from "./Greeting";
import { SocialLinks } from "./SocialLinks";

export function Header() {
  return (
    <nav>
      <Greeting />
      <SocialLinks />
    </nav>
  );
}