import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {useLocation, useNavigate, useParams} from "react-router-dom";

class ProfileContainer extends React.Component{



    componentDidMount() {

        let userId = this.props.router.params.userId;
        if (!userId){
            userId = 2;
        }
        console.log(userId);
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                console.log(response.data);
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
};

let mapStateToProps = (state) => {
    console.log(state);
    // debugger
    return {
        profile: state.ProfilePage.profile
    }
}
function withRouter(Component) {

    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}
let WithRouterDataDom = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithRouterDataDom);