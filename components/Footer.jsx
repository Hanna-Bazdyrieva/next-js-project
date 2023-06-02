import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="address">
          <a className="logo logo--footer" href="./index.html"
            >Web<span className="logo__studio--footer">Studio</span></a
          >
          <address className="address__menu">
            <ul className="address__list">
              <li className="address__item">
                <a
                  className="address__link"
                  href="https://www.google.com/maps/place/%D0%B1%D1%83%D0%BB.+%D0%9B%D0%B5%D1%81%D0%B8+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%BA%D0%B8,+26,+%D0%9A%D0%B8%D0%B5%D0%B2,+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+02000/@50.4265807,30.5361918,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cf0e033ecbe9:0x57a4dffefec77da0!8m2!3d50.4265807!4d30.5383858"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  м. Київ, пр-т Лесі Українки, 26
                </a>
              </li>
              <li className="address__item">
                <a
                  className="address__contact footer-email link"
                  href="mailto:info@devstudio.com"
                >
                  info@devstudio.com</a
                >
              </li>
              <li className="address__item">
                <a
                  className="address__contact footer-phone link"
                  href="tel:+380961111111"
                >
                  +38 096 111 11 11</a
                >
              </li>
            </ul>
          </address>
        </div>
        <div className="join">
          <p className="join__title title--footer">приєднуйтесь</p>
          <ul className="socials join__socials">
            <li className="socials__item">
              <a href="" className="socials__link socials__link--footer">
                <svg className="socials__icon" width="20" height="20">
                  <use href="./images/icons.svg#instagram"></use>
                </svg>
              </a>
            </li>
            <li className="socials__item">
              <a href="" className="socials__link socials__link--footer">
                <svg className="socials__icon" width="20" height="20">
                  <use href="./images/icons.svg#twitter"></use>
                </svg>
              </a>
            </li>
            <li className="socials__item">
              <a href="" className="socials__link socials__link--footer">
                <svg className="socials__icon" width="20" height="20">
                  <use href="./images/icons.svg#facebook"></use>
                </svg>
              </a>
            </li>
            <li className="socials__item">
              <a href="" className="socials__link socials__link--footer">
                <svg className="socials__icon" width="20" height="20">
                  <use href="./images/icons.svg#linkedin"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="subscribe footer__subscribe">
          <h2 className="subscribe__title title--footer">
            Підпишіться на розсилку
          </h2>
          <form
            className="subscribe__form js-speaker-form"
            name="subscribe"
            autocomplete="on"
          >
            <label className="subscribe__label">
              <input
                className="subscribe__input"
                type="email"
                name="email"
                placeholder="E-mail"
            /></label>
            <button className="button subscribe__button" type="submit">
              Підписатися
              <svg className="subscribe__icon" width="24" height="24">
                <use href="./images/icons.svg#icon-send"></use>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer
