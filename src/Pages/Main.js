import React from 'react';
import { useState } from 'react';
import { Bars } from 'react-loader-spinner';
import Card from '../Components/Card';

const Main = ({ inpDesc, data, hourly}) => {
  let temp = (data?.main?.temp - 273.15).toFixed(1);


  const [isCardOpen, setIsCardOpen] = useState(false)
  const handleCardBtn = (e) => {
    setIsCardOpen(!isCardOpen);
  }


  return (
    <div className='main'>
      <div className="main__container">
        {data ? (
          <Card data= {data} isCardOpen={isCardOpen} handleCardBtn={handleCardBtn} hourly={hourly}/>
        ) : (
          <Bars
            height='80'
            width='80'
            color='#4fa94d'
            ariaLabel='bars-loading'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
