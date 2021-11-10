import React, { useState } from 'react';

// icons
import { FiSend } from 'react-icons/fi';
import { BsFillEmojiSmileFill } from 'react-icons/bs';

// db
import firebase from 'firebase/compat/app';
import { firestore, auth } from "../../db";

// component
import Icon from '../Icon';

const MessageInput = () => {
    const messageRef = firestore.collection('messages');

    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await messageRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
        document.getElementById('chatBtm').scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='msgInputcontainer'>
            <form className='flexCenter w-full h-full' onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} className='msgInput' type='text' name='messageInput' id='messageInput' placeholder='Type a message here...' maxLength='100'></input>
                <button className={formValue ? 'submitButt' : 'submitButt hidden'} disabled={!formValue} type='submit'>
                    <Icon icon={< FiSend size='20' className='ml-1' />} text={'send'} />
                </button>
            </form>

            <div id='sendEmoji' className='p-2 ml-1 cursor-pointer hover:text-secondary-light'>
                <Icon icon={< BsFillEmojiSmileFill size='24' className='' />} text={''} />
            </div>
        </div>
    )
}

export default MessageInput;