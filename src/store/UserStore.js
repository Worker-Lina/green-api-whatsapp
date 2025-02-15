import {create} from "zustand";

const UserStore = create((set) => ({
    idInstance: localStorage.getItem('idInstance') || null,
    apiTokenInstance: localStorage.getItem('apiTokenInstance') || null,

    selectChat: null,

    messages: [],

    chats: [],

    setMessages: (messages) => {
        set({ messages }); 
    },

    setChats: (chats) => {
        set({ chats }); 
    },

    setSelectChat: (selectChat) => {
        set({ selectChat }); 
    },

    setUserIdInstance: (idInstance) => {
        localStorage.setItem('idInstance', idInstance);
        set({ idInstance }); 
    },

    setUserApiTokenInstance: (apiTokenInstance) => {
        localStorage.setItem('apiTokenInstance', apiTokenInstance);
        set({apiTokenInstance: apiTokenInstance})
    },

}));

export default UserStore;