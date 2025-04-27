import React, { memo } from 'react'

const Item = ({click}) => {
  return (
    <div>
        <button onClick={click}>Tang</button>
    </div>
  )
}

export default memo(Item)
