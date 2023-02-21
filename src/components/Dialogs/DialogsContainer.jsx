
import {SendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer.js";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        DialogsPage: state.DialogsPage
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

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;