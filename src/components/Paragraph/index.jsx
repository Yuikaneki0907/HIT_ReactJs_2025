import React, { useContext } from 'react'
import "./index.scss"
// import { ThemeContext } from '../../App'
import { ThemeProvider } from '../../ThemeContext'

const Paragraph = ({ThemeProvider}) => {
    // const theme = useContext
  return (
    <div style={{padding:"30px", width:"400px"}} className={theme}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, et accusamus cum eligendi voluptas amet odit nemo voluptate enim veniam numquam voluptatibus. Laborum itaque quo ex non, odio impedit culpa, ipsam exercitationem porro, suscipit commodi voluptatem natus! Exercitationem, libero. Dolores consequatur eius, dicta aut ducimus autem maiores inventore! Commodi, eaque.
    </div>
  )
}

export default Paragraph
