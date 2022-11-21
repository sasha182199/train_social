import s from "./MessageItem.module.css";


const MessageItem = (props) => {
    return(
        <div className={s.messageItem}>
            <div className={s.messageText}>
                {props.message}
            </div>
        </div>
    )
}

export default MessageItem;