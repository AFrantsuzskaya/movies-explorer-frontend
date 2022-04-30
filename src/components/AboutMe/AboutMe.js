import React from 'react';
import {  } from 'react-router-dom';
import './AboutMe.css';
import photo from '../../images/photo.jpg'

function AboutMe() {

    return(
        <section className='student' id='about-me'>
            <h2 className='student__title'>Студент</h2>
            <div className='student__container'>
                <div className='student__column'>
                  <h3 className='student__name'>Виталий</h3>
                  <p className='student__profession'>Фронтенд-разработчик, 30 лет</p>
                  <p className='student__info'>Я родился и живу в Саратове, закончил факультет 
                    экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь 
                    бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После 
                    того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл 
                    с постоянной работы.</p>
                  <ul className='student__contacts'>
                    <li className='student__contact'>
                        <a className='student__link' href='https://www.facebook.com/'>Facebook</a>
                    </li>
                    <li className='student__contact'>
                        <a className='student__link' href='https://github.com/AFrantsuzskaya'>Github</a>
                    </li>
                  </ul>
                </div>
                <div className='student__container_photo'>
                  <img className='student__photo' src={photo} alt='Фотография студента'></img>
                </div>
            </div>

        </section>
    )
}

export default AboutMe;