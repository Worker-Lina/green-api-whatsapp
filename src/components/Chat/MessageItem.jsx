import React from 'react';

const MessageItem = ({message}) => {
    const getDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleString()
    }

    return (
        <div className={message.type === "outgoing" ? 'chat-message right' : 'chat-message'}>
            <div>{message.textMessage}</div>
            <div className='time'>{getDate(message.timestamp)}</div>
            {message.type === "outgoing" ?
            message.statusMessage === "read" ?
                <div className='status'>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.6661 7.36181C20.1113 7.84422 20.1113 8.62637 19.6661 9.10878L9.0261 20.6382C8.5809 21.1206 7.8591 21.1206 7.4139 20.6382L1.3339 14.05C0.888701 13.5675 0.888701 12.7854 1.3339 12.303C1.7791 11.8206 2.5009 11.8206 2.9461 12.303L8.22 18.0177L18.0539 7.36181C18.4991 6.8794 19.2209 6.8794 19.6661 7.36181Z"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.6661 7.36181C24.1113 7.84422 24.1113 8.62637 23.6661 9.10878L13.0261 20.6382C12.5809 21.1206 11.8591 21.1206 11.4139 20.6382L5.3339 14.05C4.8887 13.5675 4.8887 12.7854 5.3339 12.303C5.7791 11.8206 6.5009 11.8206 6.9461 12.303L12.22 18.0177L22.0539 7.36181C22.4991 6.8794 23.2209 6.8794 23.6661 7.36181Z"/>
                    </svg>
                </div>
                : message.statusMessage === "red" ? 
                <div className='status delivered'>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.6661 7.36181C20.1113 7.84422 20.1113 8.62637 19.6661 9.10878L9.0261 20.6382C8.5809 21.1206 7.8591 21.1206 7.4139 20.6382L1.3339 14.05C0.888701 13.5675 0.888701 12.7854 1.3339 12.303C1.7791 11.8206 2.5009 11.8206 2.9461 12.303L8.22 18.0177L18.0539 7.36181C18.4991 6.8794 19.2209 6.8794 19.6661 7.36181Z"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.6661 7.36181C24.1113 7.84422 24.1113 8.62637 23.6661 9.10878L13.0261 20.6382C12.5809 21.1206 11.8591 21.1206 11.4139 20.6382L5.3339 14.05C4.8887 13.5675 4.8887 12.7854 5.3339 12.303C5.7791 11.8206 6.5009 11.8206 6.9461 12.303L12.22 18.0177L22.0539 7.36181C22.4991 6.8794 23.2209 6.8794 23.6661 7.36181Z"/>
                    </svg>
                </div>
                :
                <div className='status delivered'>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.6661 7.36181C20.1113 7.84422 20.1113 8.62637 19.6661 9.10878L9.0261 20.6382C8.5809 21.1206 7.8591 21.1206 7.4139 20.6382L1.3339 14.05C0.888701 13.5675 0.888701 12.7854 1.3339 12.303C1.7791 11.8206 2.5009 11.8206 2.9461 12.303L8.22 18.0177L18.0539 7.36181C18.4991 6.8794 19.2209 6.8794 19.6661 7.36181Z"/>
                    </svg>
                </div>
            :
            <></>}
        </div>
    );
};

export default MessageItem;