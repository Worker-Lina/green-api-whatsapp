import React, { useEffect, useRef } from 'react';
import UserStore from '../../store/UserStore';
import GreenApi from '../../services/general/GreenApiServices';
import MessageItem from './MessageItem';

const Content = () => {
    const idInstance = UserStore(state => state.idInstance);
    const apiTokenInstance = UserStore(state => state.apiTokenInstance);
    const selectChat = UserStore(state => state.selectChat);
    const messages = UserStore(state => state.messages);
    const setMessages = UserStore(state => state.setMessages);

    const lastElement = useRef(null);
    const scrollRef = useRef(null);

    const fetchMessages = async() => {        
        try{
            const res = await GreenApi.getChatHistory(
                idInstance,
                apiTokenInstance,
                {
                    chatId:selectChat.chatId,
                    count:30
                }
            )
            Array.isArray(res) && setMessages(res?.reverse())
        }catch(e){
            console.log(e)
        }

    }

    const fetchNotification = async() => {
        try {
            const response = await GreenApi.receiveNotification(idInstance, apiTokenInstance);
            console.log(response)
            if (response?.body) {
                const receiptId = response.receiptId;
                fetchMessages()
                if (receiptId) {
                    await GreenApi.deleteNotification(idInstance, apiTokenInstance, receiptId);
                }
            } else {
                console.log("Нет новых сообщений");
            }
        } catch (error) {
            console.error("Ошибка при получении сообщений:", error);
        }
    }

    useEffect(() => {
        fetchMessages();
    }, [selectChat?.chatId])

    useEffect(() => {
        setInterval(fetchNotification, 5000)
    }, [])


    useEffect(() => {
        if (messages?.length >= 1 && scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages])
    
    return (
        <div className='chat-messages' ref={scrollRef}>
             <div ref={lastElement}/>
            {messages?.map(message =>
            message.idMessage &&
                <MessageItem
                    key={message.idMessage}
                    message={message}
                />
            )}
        </div>
    );
};

export default Content;