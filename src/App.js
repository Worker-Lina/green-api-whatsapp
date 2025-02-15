import React from 'react';
import MainPage from './pages/MainPage/MainPage';
import "./App.scss"
import Login from './components/Login/Login';
import UserStore from './store/UserStore';

const App = () => {
    const idInstance = UserStore(state => state.idInstance);
    const apiTokenInstance = UserStore(state => state.apiTokenInstance);

    return (
        <div className='page'>
            <div className='container'>
                {(idInstance && apiTokenInstance) ?
                    <MainPage/>
                    :
                    <Login/>
                }
            </div>
        </div>
    );
};

export default App;