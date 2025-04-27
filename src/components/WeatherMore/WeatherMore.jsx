import React from 'react'

const WeatherMore = ({weather_icon, weather, weather_descrip}) => {
  return (
    <div className='weatherMore flex'>
    {weather_icon}
      <div>
        <p className="weatherMore_weatherCurrent">{weather}</p>
        <p className="weatherMore_weatherDiscrip">{weather_descrip}</p>
      </div>
    </div>
  )
}

export default WeatherMore
