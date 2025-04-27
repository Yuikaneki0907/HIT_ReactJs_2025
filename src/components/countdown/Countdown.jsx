import React, { useEffect, useState, useRef } from "react";

const Countdown = () => {
  const [countdown, setCountdown] = useState(180);

  const timeID = useRef();
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = countdown;
  }, [countdown])
  console.log(countdown, prevCount.current)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCountdown((prev) => prev - 1);
//     }, 1000);
//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

const handleStart = () =>{
    timeID.current = setInterval(() => {
        setCountdown((prev) => prev -1);
    }, 1000)

}

const handleStop = () =>{
    clearInterval(timeID.current);
}

const h1Ref = useRef();
useEffect(() => {
    console.log(h1Ref.current);
})
  return (
    <div>
      <h1>{countdown}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <h1 ref={h1Ref}>Hello</h1>
    </div>
  );
};

export default Countdown;
