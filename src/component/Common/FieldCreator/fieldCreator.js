import {Field, Form} from "react-final-form";
// import { maxLength, required} from "../RequiresDirectory/Requires";
import {InputButtonWrap, MessageButton, MessageForm} from "../../Dialogs/DialogsComponent";
import React from "react";

export const fieldCreator = (text, composeValidators, name, type, placeholder, nameOf ) => {
    return(

    <Field validate={composeValidators} name={name}>
        {({meta, input}) =>

            <div>
                {nameOf}
                <input {...input} type={type} placeholder={placeholder}/>
                {meta.error && meta.touched && <span>{meta.error}</span>}

            </div>
        }
    </Field>


)
}

