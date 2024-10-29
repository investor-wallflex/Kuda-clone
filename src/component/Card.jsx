import react from "../assets/react.svg"
import "./Card.css"
import { useState } from "react";






function Card () {
    const[]

    
    totalLikes = 0
    const increaseLikes=() =>{
        totalLikes = totalLikes ++;
    };

    return(
        <>
            <div className="card-wrap">
            <img src={react} alt="logo" />
            
            <div>
            <button onClick={increaseLikes}>Likes</button>
            <span>{}</span>
            </div>
                
            </div>
        </>
    );
}

export default Card