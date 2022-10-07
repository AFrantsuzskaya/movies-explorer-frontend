import React from "react";
import "./AboutMe.css";
import photo from "../../images/photo.jpg";

function AboutMe() {
  return (
    <section className="student" id="about-me">
      <h2 className="student__title">Студент</h2>
      <div className="student__container">
        <div className="student__column">
          <h3 className="student__name">Анастасия</h3>
          <p className="student__profession">Фронтенд-разработчик, 37 лет</p>
          <p className="student__info">
            Я родилась в маленьком городке Алтайского края, сейчас живу в Москве, 
            закончила факультет социологии АГУ. Я люблю семейные путешествия и книги. 
            Недавно начала кодить. Около 10 лет работала в банке, сейчас - начинающий frontend 
            разработчик. Область программирования, 
            привлекла меня бескрайними возможностями совершенствования и возможности решения 
            интересных задач и улучшения качества современной интернет-инфраструктуры. 
            Теперь, после окончания курса, я хочу приносить пользу, 
            применять и получать опыт и знания на реальных проектах.
          </p>
          <ul className="student__contacts">
            <li className="student__contact">
              <a
                className=" link student__link"
                href="https://www.facebook.com/"
              >
                Facebook
              </a>
            </li>
            <li className="student__contact">
              <a
                className="link student__link"
                href="https://github.com/AFrantsuzskaya"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className="student__container_photo">
          <img
            className="student__photo"
            src={photo}
            alt="Фотография студента"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
