import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {

    return(
        <section className='login'>
            <h2 className='login__title'>Рады видеть!</h2>
            <form className='login__form'>
                <label className='login__label'>
                  <p className='login__input-name'>E-mail</p>
                  <input 
                  className='login__input login__input_type_email'
                  type='email'
                  id='email'
                  name='email'
                  placeholder='pochta@yandex.ru'
                  autoComplete='off'
                  required
                  minLength='6'
                  maxLength='50'
                  />
                  <span id='email-error' className='login__input-error'></span>
                </label>
                <label className='login__label'>
                <p className='login__input-name'>Пароль</p>
                  <input 
                  className='login__input login__input_type_password'
                  type='text'
                  id='password'
                  name='password'
                  placeholder='••••••••••••••'
                  autoComplete='off'
                  required
                  minLength='8'
                  maxLength='50'
                  />
                  <span id='password-error' className='login__input-error'>Что-то пошло не так...</span>
                  </label>
                <button type='submit' className='login__button'><Link className='login__button' to='/profile'>Войти</Link></button>
            </form>
            <p className='login__text'>Ещё не зарегистрированы? <Link className='register__navigation' to='/signup'>Регистрация</Link></p>
        </section>
    )
}

export default Login;