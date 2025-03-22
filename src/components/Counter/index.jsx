import React, { useState } from 'react'

const Counter = ({setNum}) => {
  // const order = [10, 20, 30];
  //   const [counter, setCounter] = useState(() => {
  //     const total = order.reduce((total, cur) => total + cur);
  //     return total;
  //   });
  //   const handleCounter = () => {
  //       setCounter(counter + 1);
  //   }; 
  return (
    <div className='counter-container'>
        {/* <p>{counter}</p>
        <button onClick={handleCounter}>Increase</button> */}

          <button onClick={() => setNum((prev) => prev + 1)}>Add Counter</button>
          <button onClick={() => setNum((prev) => prev - 1)}>Sub Counter</button>
    </div>
  )
}

export default Counter
