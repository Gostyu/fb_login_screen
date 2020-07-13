import React, { Fragment } from"react";
import "./Form.css";
import PrimaryButton from "./PrimaryButton.js";
import InputField from "./InputField";
export default function Form({label}){

    return <Fragment>
        {(label === "Log In") && (
            <Fragment>
                <form class="">
                <h1>{label}</h1>
                <InputField placeholder="Email or Phone"></InputField>
                <InputField placeholder="Password"></InputField>
            <PrimaryButton title="LogIn"></PrimaryButton>
            </form>
         </Fragment>)
        }
        {
            (label==="Sign Up") && (
                <Fragment>
                
                <h1>{label}</h1>
                <InputField placeholder="Email or Phone"></InputField>
                <InputField placeholder="Email or Phone"></InputField>
            <PrimaryButton title="LogIn"></PrimaryButton>
         </Fragment>
            )
        }
         
    </Fragment>
}