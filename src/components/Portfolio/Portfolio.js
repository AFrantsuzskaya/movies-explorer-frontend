import React from 'react';
import {  } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {

    return(
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li className='portfolio__item'>
                    <a className='portfolio__link' href='#0' target='_blank'>Статичный сайт</a>
                    <a className='portfolio__link_type_picture' href='#0' target='_blank'><div className='portfolio__arrow'></div></a>
                </li>
                <li className='portfolio__item'>
                    <a className='portfolio__link' href='https://afrantsuzskaya.github.io/russian-travel/index.html' target='_blank'>Адаптивный сайт</a>
                    <a className='portfolio__link_type_picture' href='https://afrantsuzskaya.github.io/russian-travel/index.html' target='_blank'><div className='portfolio__arrow'></div></a>

                </li>
                <li className='portfolio__item'>
                    <a className='portfolio__link' href='https://afrantsuzskaya.github.io/mesto-react/' target='_blank'>Одностраничное приложение</a>
                    <a className='portfolio__link_type_picture' href='https://afrantsuzskaya.github.io/mesto-react/' target='_blank'><div className='portfolio__arrow'></div></a>

                </li>
            </ul>

        </section>
    )
}

export default Portfolio;