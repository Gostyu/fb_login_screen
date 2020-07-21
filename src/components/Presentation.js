import React from 'react';
import "./Presentation.css";
import {ReactComponent as SocialMediaSVG} from "../social_media.svg"
export default function Presentation({firstTitle,secondTitle, thirdTitle}) {
    return (<div className="left_container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
         alt="" className="left_container--logo"/>
         <div className="left_container--title">
            <h1>Connect with friends</h1>
            <h1>and the world around</h1>
            <h1>you on Facebook</h1>
        </div>
        <SocialMediaSVG className="left_container--img"/>
    </div>);
};
