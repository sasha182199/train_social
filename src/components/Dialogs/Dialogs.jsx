import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Navigate} from "react-router-dom";


const Dialogs = (props) => {


    let state = props.DialogsPage;

    let DialogsElements = state.DialogsData.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/> );
    let MessageElements = state.Messages.map( m => <MessageItem message={m.message} key={m.id} id={m.id}/>)

    let newMessageBody = state.newMessageBody;

    let onSendMessage = () => {
        props.SendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
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
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder="Enter your message" ></textarea></div>
                    <div><button onClick={onSendMessage}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;