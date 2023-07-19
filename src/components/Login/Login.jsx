import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

const Login = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field component={Input} validate={[requiredField]} name={"email"} placeholder="Email"/></div>
                <div><Field component={Input} validate={[requiredField]} type={"password"} name={"password"} placeholder="Password"/></div>
                <div><Field component={Input} validate={[requiredField]} name={"rememberMe"} type="checkbox"/> Remember me</div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
}

const ReduxLoginForm = reduxForm({
    form: "login"
})(Login)

const LoginForm = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Navigate to={"/profile/2"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(LoginForm);