import React from "react";

import { Link } from "react-router-dom";

import '../HomePage.css'




function HomePage(){
    document.body.style.backgroundImage = "url(https://media.giphy.com/media/12pJ8OxSWwO86Y/giphy.gif)"
    document.body.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"

    return(
    <div className='homepage'>
        <div className="homepagecard">
            <p className='hometext'>Welcome to Pet & Date 
            this is an app for Pet lovers looking for love. 😍
            We are not limited to only finding you love ,
            you are welcome to borrowing and lending a domestic Animal of your choosing.  </p> 
            <div className="lglink">
            <Link to='/Login'>Login </Link> 
            /
            <Link to='/Signup'>Signup </Link>
            </div>
        </div>
    </div>
    )
}


export default HomePage