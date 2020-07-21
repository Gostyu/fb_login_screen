import React, { Fragment } from"react";
import "./Form.css";
import PrimaryButton from "./PrimaryButton.js";
import InputField from "./InputField";

const Label = ({title})=>{
return <label>{title}</label>
};

export default function Form({label}){
    const sublabel1 ="You'll need to confirm that email or phone belongs to you";
    const sublabel2 = "Use 8 or more characters with a mix of letters, numbres & symbols";
    const subTitle = "It's quick and easy";
    return <Fragment>
        {(label === "Log In") && (
            <div className="container top_container">
                <h1>{label}</h1>
                <form className="">
                <InputField placeholder="Email or Phone"></InputField>
                <InputField placeholder="Password"></InputField>
                <br></br>
            <PrimaryButton title="LogIn"></PrimaryButton>
            </form>
         </div>)
        }
        {
            (label==="Sign Up") && (
                <div className="container bottom_container">
                <h1 className="bottom_container_title">{label}</h1>
                <h2 className="bottom_container_subtitle">{subTitle}</h2>
                <form className="">
                    <InputField placeholder="Firstname"></InputField>
                    <InputField placeholder="Lastname"></InputField>
                <div className="form_body">
                    <input className="inputfield" type="text" placeholder="Email or Phone"></input>
                    <Label title={sublabel1}></Label>
                </div>
                    <InputField placeholder="Email or Phone"></InputField>
                    <InputField placeholder="Email or Phone"></InputField>
                    <br></br>
                    <Label title={sublabel2}></Label>
                     <br></br>
            <PrimaryButton title="Next Step"></PrimaryButton>
            </form>
         </div>
            )
        }
         
    </Fragment>
}