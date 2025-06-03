import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AccountSettings, LandingScreen, LoginPage, RegisterForm } from './pages'

const App = () => {
    return (
        <div className='flex flex-col min-h-screen items-center'>
            <Routes>
                <Route path='/' element={<LandingScreen/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/create-account' element={<RegisterForm/>}/>
                <Route path='/profile' element={<AccountSettings/>}/>
            </Routes>
        </div>
    )
}

export default App
