import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChatPage } from './views/ChatPage';
import { SignInPage } from './views/SignInPage';
import { UserProfilePage } from './views/UserProfilePage';





const App : React.FC = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <SignInPage /> } / >
                <Route path='/profile' element={<UserProfilePage />} />
                <Route path='/chat' element={<ChatPage />} />
            </Routes>
        </BrowserRouter>
        </>
}

export default App