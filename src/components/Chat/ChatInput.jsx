import React, { useState } from 'react';
import UserStore from '../../store/UserStore';
import GreenApi from '../../services/general/GreenApiServices';

const ChatInput = () => {
    const [value, setValue] = useState('');

    const idInstance = UserStore(state => state.idInstance);
    const apiTokenInstance = UserStore(state => state.apiTokenInstance);
    const selectChat = UserStore(state => state.selectChat);

    const handleKeyDown = async(e) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            try{
                const messageID = await GreenApi.sendMessage(idInstance,apiTokenInstance,{
                    chatId: selectChat.chatId,
                    message: value
                })
                setValue('')
            }catch(e){
                console.log(e)
            }
        }
    }

    return (
        <div className='chat-input'>
            <input type="text" className='input' placeholder='Введите сообщение'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default ChatInput;