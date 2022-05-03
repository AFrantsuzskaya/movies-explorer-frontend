import React from "react";
import NavTab from "../NavTab/NavTab";
import illustration from "../../images/text-illustration.svg";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__box">
        <div className="promo__text-box">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promp__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
        </div>
        <img className="promo__image" src={illustration} alt="иллюстрация - веб-шар"></img>
      </div>
      <NavTab />
    </section>
  );
}

export default Promo;
