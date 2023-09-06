import React, { useState } from 'react';

const Card = ({ data, handleCardBtn, isCardOpen }) => {
  let temp = (data?.main?.temp - 273.15).toFixed(1);
  let imgUrl = `https://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`;
  console.log(data);

  if (isCardOpen) {
    return (
      <div className='main__card'>
        <h3 className='main__card-title'>{data.name}</h3>
        <div className="main__card-img">
            <img src={imgUrl} alt="" />
          </div>
          <p className="main__card-decription">{data.weather[0].description}</p>
        <p className='main__card-temp'>{temp} C</p>

        <div className="main__card-desc">
          <p>Ветер: {data.wind.speed} м/с</p>
        <p>По ощущениям: {(data.main.feels_like - 273.15).toFixed(1)} C</p>
        </div>

        <button className='main__card-btn' onClick={handleCardBtn}>
          Свернуть
        </button>
      </div>
    )
  } else {
    return (
      <div className='main__card'>
        <h3 className='main__card-title'>{data.name}</h3>
        <p className='main__card-temp'>{temp} C</p>
        <button className='main__card-btn' onClick={handleCardBtn}>
          Подробнее
        </button>
      </div>
    )
  }
};

export default Card;
