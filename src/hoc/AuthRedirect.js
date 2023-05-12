import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForAuth = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const AuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render () {
            if(!this.props.isAuth){
                return <Navigate to={"/login"}/>
            }
            return <Component {...this.props} />
        }
    }

    let mapStateToPropsForAuth = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }
    let ConnectedAuthNavigateComponent = connect(mapStateToPropsForAuth)(RedirectComponent);

    return ConnectedAuthNavigateComponent;
}