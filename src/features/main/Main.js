import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './mainSlice';

import './Main.css';

export const  Main = ({ weatherData }) => {
  // Check if weather data is available
  if (!weatherData) return <div>Loading...</div>;

  const { location, current } = weatherData;

  let description = "";

  // Describe the temperature
  if (current.temp_c <= 0) {
      description += "It's freezing in ";
  } else if (current.temp_c > 0 && current.temp_c <= 10) {
      description += "It's quite cold in ";
  } else if (current.temp_c > 10 && current.temp_c <= 20) {
      description += "It's mild in ";
  } else if (current.temp_c > 20 && current.temp_c <= 30) {
      description += "It's warm in ";
  } else {
      description += "It's hot in ";
  }
  description += `${location.name}. `;

  // Describe the weather condition
  description += `The sky is ${current.condition.text.toLowerCase()}. `;

  // Describe the wind
  if (current.wind_mph > 0 && current.wind_mph <= 5) {
      description += "There's a light breeze. ";
  } else if (current.wind_mph > 5 && current.wind_mph <= 15) {
      description += "It's quite windy. ";
  } else if (current.wind_mph > 15) {
      description += "Strong winds are blowing. ";
  }

  // Describe humidity
  if (current.humidity >= 80) {
      description += "The humidity is high. ";
  }

  return (
      <div className='main-wrapper'>
          <h2>Weather in {location.name}, {location.country}</h2>
          <p>{description}</p>
          <p>Temperature: {current.temp_c}°C ({current.temp_f}°F)</p>
          <img src={current.condition.icon} alt={current.condition.text} />
          {/* Add more details as desired */}
      </div>
  );
}



