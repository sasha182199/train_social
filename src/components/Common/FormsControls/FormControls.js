import React from "react";
import s from "./FormControls.module.css"

const FormControl = ({input,child,meta,element, ...props}) => {
    const showError = meta.touched && meta.error;

    return (
        <div className={s.formControl + " " + (showError ? s.error : "")}>
            {props.children}
            <div>
                {showError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input,child,meta, ...restProps} = props;
    return(
        <FormControl {...props}>
            <textarea {...input} {...restProps}/>
        </FormControl>
    )

}

export const Input = (props) => {

    const {input,child,meta, ...restProps} = props;
    return(
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    )
}