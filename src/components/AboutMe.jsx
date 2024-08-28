import React from 'react'
import pic from '../assets/me.jpg'

export function AboutMe() {
  return (
    <div className='about-me'>
      <img src={pic} alt="about-picture" />
    </div>
  )
}