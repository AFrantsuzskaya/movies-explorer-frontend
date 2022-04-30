import React from "react";
import "./AboutProgect.css";

function AboutProject() {
  return (
    <section className="project" id="about-project">
      <h2 className="project__title">О проекте</h2>
      <ul className="project__description">
        <li className="project__element">
          <h3 className="project__description_type_title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="project__element">
          <h3 className="project__description_type_title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="project__scale">
        <p className="project__scale-time">1 неделя</p>
        <p className="project__scale-time">4 недели</p>
        <p className="project__scale-name">Back-end</p>
        <p className="project__scale-name">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
