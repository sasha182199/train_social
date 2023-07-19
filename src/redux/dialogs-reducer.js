const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    DialogsData : [
        {name : "Andrey",id : 1},
        {name : "Sasha",id : 2},
        {name : "Natalia",id : 3},
        {name : "Olga",id : 4},
        {name : "Svetlana",id : 5}
    ],
    Messages : [
        {message : "Hi, it's my first App" ,id : 1},
        {message : "Looking for a job?" ,id : 2},
        {message : "Fine, waiting for u" ,id : 3},
        {message : "Got it" ,id : 4}
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type){

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                Messages : [...state.Messages, {message : body,id : 6}]
            };
        default:
            return state;
    }


}

export const SendMessageCreator = (newMessageBody) => ({type : SEND_MESSAGE, newMessageBody})


export default dialogsReducer;