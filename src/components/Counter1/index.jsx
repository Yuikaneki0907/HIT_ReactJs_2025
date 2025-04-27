import React, { useCallback, useEffect, useState } from 'react'
import Item from '../Item';

const Couter1 = () => {
    const [index, setIndex] = useState(0);
    const click = useCallback(() => {
        setIndex((prev) => prev +1);
    }, [])
  return (
    <div>
        <h1>{index}</h1>
        <Item click = {click}/>
    </div>
  )
}

export default Couter1
