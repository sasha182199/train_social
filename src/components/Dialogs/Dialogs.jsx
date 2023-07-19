import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

let maxLength = maxLengthCreator(50);
const Dialogs = (props) => {


    let state = props.DialogsPage;

    let DialogsElements = state.DialogsData.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/> );
    let MessageElements = state.Messages.map( m => <MessageItem message={m.message} key={m.id} id={m.id}/>)


    let addNewMessage = (values) => {
        props.SendMessage(values.newMessageBody);
    }

    if(!props.isAuth){
        return <Navigate to={"/login"} />
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <div className={s.dialogs_title}>Dialogs</div>
                <div>
                    {DialogsElements}
                </div>
            </div>
            <div className={s.messageDialogs}>
                <div className={s.dialogs_title}>Messages</div>
                <div>
                    {MessageElements}
                </div>
                <ReduxMessageForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field component={Textarea} validate={[requiredField, maxLength]} name={"newMessageBody"} placeholder="Enter your message"/>

            </div>
            <div><button>Send</button></div>
        </form>
    )
}
const ReduxMessageForm = reduxForm({
    form: "DialogAddMessageForm"
})(AddMessageForm)

export default Dialogs;