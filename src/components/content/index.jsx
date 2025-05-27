import Paragraph from '../Paragraph'
import React from 'react'

const Content = ({theme}) => {
  return (
    <div style={{marginTop: "20px", width: "400px"}}>
      <Paragraph theme={theme}/>
    </div>
  )
}

export default Content
