import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'
import axios from 'axios';

const LoginPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {signin} = useAuth()

    // здесь получаем данные информацию, откуда мы пришли, если нет, дефолтное условие - главная страница
    const fromPage = location.state?.from?.pathname || '/'

    
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const user = {
            login : form.login.value,
            pasword : form.pasword.value

        }
        signin(user, () => navigate(fromPage, {replace: false}))
    }

    return(
        <>
            <form onSubmit={handleSubmit} action="">
                <input type="text" name='login'/>
                <input type="text" name='pasword'/>
                <button type="submit">войти</button>
            </form>
        </>
    )
}

export default LoginPage