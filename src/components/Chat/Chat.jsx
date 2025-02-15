import React from 'react';
import ChatList from './ChatList';
import ChatContent from './ChatContent';

const Chat = () => {
    return (
        <div className='chat'>
            <ChatList/>
            <ChatContent/>
        </div>
    );
};

export default Chat;