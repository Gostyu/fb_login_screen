import React, { Fragment } from"react";
import "./Form.css";
import PrimaryButton from "./PrimaryButton.js";
import InputField from "./InputField";
export default function Form({label}){

    return <form>
        {(label === "Log In") && (
            <Fragment>
                <label>{label}</label>
                <InputField placeholder="Email or Phone"></InputField>
                <InputField placeholder="Email or Phone"></InputField>
            <PrimaryButton title="LogIn"></PrimaryButton>
         </Fragment>)
        }
        {
            (label==="Sign Up") && (
                <Fragment>
                <label>{label}</label>
                <InputField placeholder="Email or Phone"></InputField>
                <InputField placeholder="Email or Phone"></InputField>
            <PrimaryButton title="LogIn"></PrimaryButton>
         </Fragment>
            )
        }
         
    </form>
}