import React from 'react'
import open from '../assets/open.svg'

export function OpenLink({ link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={open} alt="openLinkImg" />
    </a>
  );
}
