import React from 'react';
import UserStore from '../../store/UserStore';
import placeholder from './../../images/placeholder.jpg'

const ChatItem = ({card}) => {
    const setSelectChat = UserStore(state => state.setSelectChat);

    return (
        <div className='chat-item' onClick={() => setSelectChat(card)}>
            <img src={placeholder} alt="" />
            <div>
                <div className='chat-item-top'>
                    <h4>{card?.contactName}</h4>
                </div>
            </div>
        </div>
    );
};

export default ChatItem;