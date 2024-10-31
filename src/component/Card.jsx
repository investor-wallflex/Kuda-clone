import react from "../assets/react.svg"
import "./Card.css"
import { useState } from "react";






function Card () {
    
    const [userName , setUserName] = useState("")
  

    return(
        <>
           
            <center>
            <h2> wale group of school</h2>
            <h4>student info entry</h4>
            <form action="">
                <input type="text" placeholder="enter user name" /><br />
                <input type="email" placeholder="email" /><br />
                <input type="bio" placeholder="enter your bio" />
            </form>
                <button>submit</button>
            </center>
            

        </>
    );
}

export default Card