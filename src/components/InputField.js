import React from "react";
import "./InputField.css";
export default function InputField({placeholder}){
    return <input className="inputfield" type="text" placeholder={placeholder}></input>;
}