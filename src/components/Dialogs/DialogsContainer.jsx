import {SendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer.js";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

import {AuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        DialogsPage: state.DialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody : (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        SendMessage : () => {
            dispatch(SendMessageCreator());

        }
    }
}





export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    AuthRedirect

)(Dialogs);