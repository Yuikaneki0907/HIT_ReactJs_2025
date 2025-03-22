import React from 'react'
import Image from "../../assets/react.svg";

const PostItem = (props) => {
    console.log(props)
  return (
    <div className='post-item'>
      <img src={props.img} alt="" />
      <h2 className='post-title'>{props.p}</h2>
      <p className='post-desc'>Bai hoc ve props</p>
      <p className='post-published'>Mot ngay truoc</p>
      {props.children}
      {props.object?.map((item, key) =>(
        <p key={key}>{item.name} - {item.age}</p>
        
      ))}
    </div>
  )
}

export default PostItem
