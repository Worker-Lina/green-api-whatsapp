import React, { useState } from 'react';
import ChatItem from './ChatItem'
import Modal from '../Modal/Modal';
import UserStore from '../../store/UserStore';

const ChatList = () => {
    const chats = UserStore(state => state.chats);
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
        setIsOpen(false)
    }

    const onOpen = () => {
        setIsOpen(true)
    }

    return (
        <div className='chat-list'>
            <div className='flex mb-30'>
                <h1>Чаты</h1>
                <button className='button' onClick={onOpen}>Добавить чат</button>
            </div>
            <div className='chat-list-content'>
                {chats?.map(card =>
                    <ChatItem
                        key={card.chatId}
                        card={card}
                    />
                )}
            </div>
            {isOpen && <Modal isOpen={isOpen} close={onClose}/>}
        </div>
    );
};

export default ChatList;