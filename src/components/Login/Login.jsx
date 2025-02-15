import React, { useState } from 'react';
import UserStore from '../../store/UserStore';

const Login = () => {
    const setUserIdInstance = UserStore(state => state.setUserIdInstance);
    const setUserApiTokenInstance = UserStore(state => state.setUserApiTokenInstance);

    const [idInstance, setIdInstance] = useState('');
    const [apiTokenInstance, setApiTokenInstance] = useState('');

    const handleSave = () => {
        if(idInstance && apiTokenInstance){
            setUserIdInstance(idInstance);
            setUserApiTokenInstance(apiTokenInstance);
        }else{
            alert('Заполните поля')
        }
    }

    return (
        <div className='login'>
            <h1>Введите ваши данные</h1>
            <div className='login-form'>
                <input 
                    type="text" 
                    className='login-form-input' 
                    placeholder='idInstance'
                    value={idInstance}
                    onChange={(e) => setIdInstance(e.target.value)}
                    required
                />
                <input 
                    type="text" 
                    className='login-form-input' 
                    placeholder='apiTokenInstance'
                    value={apiTokenInstance}
                    onChange={(e) => setApiTokenInstance(e.target.value)}
                    required
                />
                <button onClick={handleSave} className='button'>Отправить</button>
            </div>
        </div>
    );
};

export default Login;