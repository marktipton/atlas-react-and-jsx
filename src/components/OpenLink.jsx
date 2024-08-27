import React from 'react'
import open from '../assets/open.svg'

export function OpenLink({ link }) {
  return (
    <a href={link}>
      <img src={open} alt="openLinkImg" />
    </a>
  );
}
