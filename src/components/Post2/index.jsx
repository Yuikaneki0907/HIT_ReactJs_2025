import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Post2 = () => {
  const[title, setTitle] = useState("");
  const [post, setPost] = useState([]);
  let type = ["posts", "comments", "albums"];
  const[tab, setTab] = useState("posts");
  
  useEffect(() => {
    document.title = title;
    // console.log("mounted");
    const fetchPost = async () => {
      try{
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${tab}`
        );
        setPost(response.data);
        console.log('post', post)
        console.log(tab);
        


      }catch(error){
        console.error("Loi khi fetch du lieu", error);
      }
      
    }
    fetchPost();
  }, [tab]);
  return (
    <div>
      {
        type.map((tabs) => (
          <button key={tabs} onClick={() => setTab(tabs)
          }>{tabs}</button>
        ))
      }
      <input type="text" value={title}
      onChange={(e) => setTitle(e.target.value)} className='inp'/>
      {/* <h1>Helo</h1> */}
      {/* {console.log("re-render")} */}
      {
      post.map((posts) => (

        <li key={posts.id}>{posts.id} {posts.title || posts.name}</li>
          
      )
      )}
    </div>
  )
}

export default Post2
