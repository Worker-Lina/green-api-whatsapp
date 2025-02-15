import React from 'react';
import Header from './Header';
import ChatInput from './ChatInput';
import Content from './Content';
import UserStore from '../../store/UserStore';

const ChatContent = () => {
    const selectChat = UserStore(state => state.selectChat);

    return (
        <>
        {selectChat ?
            <div className='chat-content'>
                <Header/>
                <Content/>
                <ChatInput/>
            </div>
        :
            <div className='chat-content'>
                <div className='chat-content-empty'>
                    <h2>Чат не выбран</h2>
                </div>
            </div>
        }
        </>
    );
};

export default ChatContent;