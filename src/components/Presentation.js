import React from 'react';
import "./Presentation.css";
import img from "../assets/social_media.png"
export default function Presentation({className,title}) {
    return (<div className="left_container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
         alt="" className="logo"/>
        <h1>{title}</h1>
        <img src={img} alt="" className="container--img"/>
    </div>);
};
