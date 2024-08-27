import React from 'react';


export function Greeting() {
  const time = new Date().getHours();
  let imgSource = '';
  let greetingText = '';

  if (time < 6 || time > 21) {
    imgSource = '../assets/night.svg';
    greetingText = 'Good Night!';
  } else if (time < 12) {
    imgSource = '../assets/day.svg';
    greetingText = 'Good Morning!';
  } else if (time < 17) {
    imgSource = '../assets/day.svg';
    greetingText = 'Good Afternoon!';
  } else {
    imgSource = '../assets/evening.svg';
    greetingText = 'Good Evening!';
  }

  return (
    <h1 className='greeting'>
      <img src={imgSource} alt="GreetingImg" />
      {greetingText}
    </h1>
  );
}
