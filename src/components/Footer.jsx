import React from "react";
import links from '../assets/links.json'

export function Footer() {
  const year = new Date().getFullYear()
  return(
    <footer>
      <ul>

      </ul>
      <p>© {year} Atlas School</p>
    </footer>
  );
}