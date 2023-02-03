import React from "react";
import { useSelector } from "react-redux";
import 'react-dropdown/style.css';

const Welcome = () => {
  const {user} = useSelector((state) => state.auth);
  return (
    <div>
        <h1 className="title">Dashboard</h1>
        <h2 className="subtitle">Welcome Back <strong>{user && user.name}</strong> </h2>
       
        {user && user.role === "admin" &&
        <iframe width="90%" height="500" src="https://www.youtube.com/embed/Bv6A93ziMrE" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        }
        {user && user.role === "user" &&
        <iframe width="90%" height="500" src="https://www.youtube.com/embed/a1jsUWqBZoM" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        }
    </div>
    
  )
}

export default Welcome;