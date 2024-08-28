import React from 'react'
import pic from '../assets/me.jpg'

export function AboutMe() {
  return (
    <div className='about-me'>
      <img src={pic} alt="about-picture" />
      <p>
        My name is Mark Tipton. I am a Full Stack Web Development student in trimester five at Atlas School Tulsa.
        I have enjoyed my time at Atlas learning a variety of technologies. I really liked working with databases using SQL and NoSQL. I am also liking React so far.
        After I finish school I hope to find a job working with data in either a front end or back end role.
        Outside of school I like to spend time watching movies, reading, and playing various sports and games.
      </p>
    </div>
  )
}