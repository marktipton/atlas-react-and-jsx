import React from 'react';
import night from '../assets/night.svg';
import day from '../assets/day.svg';
import evening from '../assets/evening.svg';

export function Greeting() {
  const time = new Date().getHours();
  let imgSource = '';
  let greetingText = '';

  if (time < 6 || time > 21) {
    imgSource = night;
    greetingText = 'Good Night!';
  } else if (time < 12) {
    imgSource = day;
    greetingText = 'Good Morning!';
  } else if (time < 17) {
    imgSource = day;
    greetingText = 'Good Afternoon!';
  } else {
    imgSource = evening;
    greetingText = 'Good Evening!';
  }

  return (
    <h1 className='greeting'>
      <img src={imgSource} alt="GreetingImg" />
      {greetingText}
    </h1>
  );
}
