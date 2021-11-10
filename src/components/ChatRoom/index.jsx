import React, { useRef, } from 'react';

// component
import MessageInput from "../MessageInput"

// db
import { firestore, useCollectionData, auth } from "../../db";

// func
import { YMD_HMS_Formater } from '../../helpers/TimeFormater';
import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';

// import it first.
import vi from 'timeago.js/lib/lang/vi';

// register it.
timeago.register('vi', vi);


const ChatRoom = () => {
    const chatBtm = useRef();
    const messageRef = firestore.collection('messages');
    var query = messageRef.orderBy('createdAt').limitToLast(100);

    const [messages] = useCollectionData(query, { idField: 'id' });

    if (chatBtm.current) {
        setTimeout(function () { document.getElementById('chatBtm').scrollIntoView({ behavior: 'smooth' }) }, 100);
    } else {
        // go do that thing
    };

    // function LoadMoreMsgs(limit) {
    //     const messageRef = firestore.collection('messages');
    //     query = messageRef.orderBy('createdAt').limitToLast(limit);
    //     const [messages] = useCollectionData(query, { idField: 'id' });

    //     return (
    //         (messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />))
    //     )
    // }

    return (
        <div className='main relative flex-col bg-primary dark:bg-sideColor text-primary'>
            <div className=" h-full w-screen flexCenter justify-start flex-col overflow-y-auto overflow-x-hidden pt-12 pb-2 px-0 md:px-4" id='messages'>
                <button className='mx-auto p-2 mb-4 text-primary bg-sideColor hover:bg-secondary dark:bg-primary dark:text-sideColor'>Load more</button>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                <span id='chatBtm' ref={chatBtm}></span>
            </div>
            <MessageInput />
        </div>
    )
}

function ChatMessage(props) {
    const { text, uid, photoURL, createdAt } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    let time;
    try {
        time = createdAt.seconds
    } catch (error) {
        time = 1;
    }
    return (<>
        <div className={`message ${messageClass}`}>
            <img alt='userImg' src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            <div className='content'>
                <p>{text}</p>
                <TimeAgo
                    datetime={YMD_HMS_Formater(time)}
                    locale='en'
                    className={'time'}
                />
            </div>

        </div>
    </>)
}




export default ChatRoom;