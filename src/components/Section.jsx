import React from 'react'

export function Section({ title, children }) {
  return (
    <div className='section'>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  )
}

export default Section