import React, { useState } from 'react';
import PhoneInput from '../Input/PhoneInput';
import GreenApi from '../../services/general/GreenApiServices';
import UserStore from '../../store/UserStore';

const Modal = ({isOpen, close}) => {
    const idInstance = UserStore(state => state.idInstance);
    const apiTokenInstance = UserStore(state => state.apiTokenInstance);
    const chats = UserStore(state => state.chats);
    const setChats = UserStore(state => state.setChats);
    const setSelectChat = UserStore(state => state.setSelectChat);
    const [phone, setPhone] = useState('');

    const cleanPhoneNumber = (value) => {
        return value.replace(/\D/g, ''); // Убираем все нецифровые символы
    };

    const handleSubmit = async () => {
        const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
        if (!phonePattern.test(phone)) {
            alert("Введите корректный номер телефона.");
            return;
        }
        const cleanedPhone = cleanPhoneNumber(phone);

        const res = await GreenApi.checkWhatsapp(idInstance, apiTokenInstance, {
            phoneNumber: cleanedPhone
        })
        if(res?.existsWhatsapp){
            const contactInfo = await GreenApi.GetContactInfo(idInstance, apiTokenInstance, {
                chatId: `${cleanedPhone}@c.us`
            })
            if(contactInfo?.chatId){
                setChats([...chats, contactInfo])
                setSelectChat(contactInfo)
                close()
            }else{
                alert(contactInfo?.invokeStatus?.description)
            }
        }else{
            alert('Whatsapp на данный номер не существует')
        }
    }

    return (
        <div className='modal'>
            <div className='overlay' onClick={close}></div>
            <div className='wrapper'>
                <div className='close' onClick={close}>x</div>
                <div className='body'>
                    <h2>Добавить контакт</h2>
                    <label>
                        Номер
                        <PhoneInput value={phone} onChange={setPhone} />
                    </label>
                    <button className='button' onClick={handleSubmit}>Добавить</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;