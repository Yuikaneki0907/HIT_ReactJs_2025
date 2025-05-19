import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Home page </h1>
      <button onClick={() => navigate("/contact")}>Contact</button>
      <Outlet/>
    </div>
  )
}

export default Home
