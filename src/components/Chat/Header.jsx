import React from 'react';
import UserStore from '../../store/UserStore';

const Header = () => {
    const selectChat = UserStore(state => state.selectChat);
    return (
        <div className='chat-header'>
            <img src="" alt="" />
            <div>{selectChat?.contactName}</div>
            <div></div>
        </div>
    );
};

export default Header;