import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {

    let DialogsElements = props.state.DialogsData.map( d => <DialogItem name={d.name} id={d.id}/> );
    let MessageElements = props.state.Messages.map( m => <MessageItem message={m.message} id={m.id}/>)

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
            </div>
        </div>
    )
}

export default Dialogs;