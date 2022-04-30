import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__container">
        <h2 className="techs__title_type_section">Технологии</h2>
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__link">HTML</li>
          <li className="techs__link">CSS</li>
          <li className="techs__link">JS</li>
          <li className="techs__link">React</li>
          <li className="techs__link">Git</li>
          <li className="techs__link">Express.js</li>
          <li className="techs__link">mongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;
