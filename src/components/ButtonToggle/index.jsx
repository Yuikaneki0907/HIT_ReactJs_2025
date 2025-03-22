import React, { useState } from 'react'
import "./style.css"

const ButtonToggle = () => {
    const [isOn, setIsOn] = useState(true)

  const toggleButton = () => {
    setIsOn((prevState) => !prevState);
  }

  return (
    <button className={`btn ${isOn ? "":"row-reverse"}`}
      onClick={toggleButton}
    >
      <p style={{
            width: "40px",
      }}>{isOn ? "ON" : "OFF" }</p>
      <p className=''
        style={{
            padding: "12px",
            margin: isOn ? "4px 0px 4px 12px" : "4px 12px 4px 0px",
            backgroundColor: "green",
            borderRadius: "50px",
            border: "10px solid #fff"
        }}  
      ></p>
    </button>
  )
}

export default ButtonToggle
