
function Gallery() {
  return (
    <section className="section">
        <div className="container">
          <h1 className="section__title title title--hidden">Портфоліо</h1>
          <ul className="filter">
            <li className="filter__item">
              <button className="filter__button" type="button">Усі</button>
            </li>
            <li className="filter__item">
              <button className="filter__button" type="button">
                Веб-сайти
              </button>
            </li>
            <li className="filter__item">
              <button className="filter__button" type="button">
                Додатки
              </button>
            </li>
            <li className="filter__item">
              <button className="filter__button" type="button">Дизайн</button>
            </li>
            <li className="filter__item">
              <button className="filter__button" type="button">
                Маркетинг
              </button>
            </li>
          </ul>
          <ul className="projects">
            <li className="project">
              <a className="project__link link" href="">
                <div className="project__thumb">
                  <img
                    className=""
                    src="./images/project1.jpg"
                    alt="Фото проєкту, Веб-сайт Технокряк"
                    width="370"
                  />
                  <div className="project__text-wrap">
                    <p>
                      Ресурс пропонує комплексні пропозиції з різним рівнем
                      функціоналу та сервісів. Все це дозволить відвідувачу
                      отримати вичерпні відомості про компанію чи приватну
                      особу.
                    </p>
                  </div>
                </div>
                <div className="project__info-wrap">
                  <h2 className="project__title">Технокряк</h2>
                  <p className="project__description">Веб-сайт</p>
                </div>
              </a>
            </li>
            <li className="project">
              <a className="link project__link" href="">
                <div className="project__thumb">
                  <img
                    src="./images/project2.jpg"
                    alt="Фото проєкту, Постер New Orlean vs Golden Star"
                    width="370"
                  />
                  <div className="project__text-wrap">
                    <p>
                      Ресурс пропонує комплексні пропозиції з різним рівнем
                      функціоналу та сервісів. Все це дозволить відвідувачу
                      отримати вичерпні відомості про компанію чи приватну
                      особу.
                    </p>
                  </div>
                </div>
                <div className="project__info-wrap">
                  <h2 className="project__title">
                    Постер <span lang="en">New Orlean vs Golden Star</span>
                  </h2>
                  <p className="project__description">Дизайн</p>
                </div>
              </a>
            </li>
            <li className="project">
              <a className="link project__link" href="">
                <div className="project__thumb">
                  <img
                    src="./images/project3.jpg"
                    alt="Фото проєкту, додаток для Ресторан Seafood"
                    width="370"
                  />
                  <div className="project__text-wrap">
                    <p>
                      Ресурс пропонує комплексні пропозиції з різним рівнем
                      функціоналу та сервісів. Все це дозволить відвідувачу
                      отримати вичерпні відомості про компанію чи приватну
                      особу.
                    </p>
                  </div>
                </div>
                <div className="project__info-wrap">
                  <h2 className="project__title">
                    Ресторан <span lang="en">Seafood</span>
                  </h2>
                  <p className="project__description">Додаток</p>
                </div>
              </a>
            </li>
            <li className="project">
              <a className="link project__link" href="">
                <div className="project__thumb">
                  <img
                    src="./images/project4.jpg"
                    alt="Фото проєкту, Проєкт Prime, чорні навушники"
                    width="370"
                  />
                  <div className="project__text-wrap">
                    <p>
                      Ресурс пропонує комплексні пропозиції з різним рівнем
                      функціоналу та сервісів. Все це дозволить відвідувачу
                      отримати вичерпні відомості про компанію чи приватну
                      особу.
                    </p>
                  </div>
                </div>
                <div className="project__info-wrap">
                  <h2 className="project__title">
                    Проєкт <span lang="en">Prime</span>
                  </h2>
                  <p className="project__description">Маркетинг</p>
                </div>
              </a>
            </li>
            <li className="project">
              <a className="link project__link" href="">
                <div className="project__thumb">
                  <img
                    src="./images/project5.jpg"
                    alt="Фото проєкту, Проєкт Boxes, коробки"
                    width="370"
                  />
                  <div className="project__text-wrap">
                    <p>
                      Ресурс пропонує комплексні пропозиції з різним рівнем
                      функціоналу та сервісів. Все це дозволить відвідувачу
                      отримати вичерпні відомості про компанію чи приватну
                      особу.
                    </p>
                  </div>
                </div>
                <div className="project__info-wrap">
                  <h2 className="project__title">
                    Проєкт <span lang="en">Boxes</span>
                  </h2>
                  <p className="project__description">Додаток</p>
                </div>
              </a>
            </li>
            <li className="project">
              <a className="link project__link" href="">
                <div className="project__thumb">
                  <img
                    src="./images/project6.jpg"
                    alt="Фото проєкту, Inspiration has no Borders, чорний екран монітора"
                    width="370"
                  />
                  <div className="project__text-wrap">
                    <p>
                      Ресурс пропонує комплексні пропозиції з різним рівнем
                      функціоналу та сервісів. Все це дозволить відвідувачу
                      отримати вичерпні відомості про компанію чи приватну
                      особу.
                    </p>
                  </div>
                </div>
                <div className="project__info-wrap">
                  <h2 className="project__title" lang="en">
                    Inspiration has no Borders
                  </h2>
                  <p className="project__description">Веб-сайт</p>
                </div>
              </a>
            </li>
            <li className="project">
              <a className="link project__link" href="">
                <div className="project__thumb">
                  <img
                    src="./images/project7.jpg"
                    alt="Фото проєкту, Видання Limited Edition, чорний екран монітора"
                    width="370"
                  />
                  <div className="project__text-wrap">
                    <p>
                      Ресурс пропонує комплексні пропозиції з різним рівнем
                      функціоналу та сервісів. Все це дозволить відвідувачу
                      отримати вичерпні відомості про компанію чи приватну
                      особу.
                    </p>
                  </div>
                </div>
                <div className="project__info-wrap">
                  <h2 className="project__title">
                    Видання <span lang="en">Limited Edition</span>
                  </h2>
                  <p className="project__description">Дизайн</p>
                </div>
              </a>
            </li>
            <li className="project">
              <a className="link project__link" href="">
                <div className="project__thumb">
                  <img
                    src="./images/project8.jpg"
                    alt="Фото проєкту, Проєкт LAB, была бірка"
                    width="370"
                  />
                  <div className="project__text-wrap">
                    <p>
                      Ресурс пропонує комплексні пропозиції з різним рівнем
                      функціоналу та сервісів. Все це дозволить відвідувачу
                      отримати вичерпні відомості про компанію чи приватну
                      особу.
                    </p>
                  </div>
                </div>
                <div className="project__info-wrap">
                  <h2 className="project__title">Проєкт LAB</h2>
                  <p className="project__description">Маркетинг</p>
                </div>
              </a>
            </li>
            <li className="project">
              <a className="link project__link" href="">
                <div className="project__thumb">
                  <img
                    src="./images/project9.jpg"
                    alt="Фото проєкту, Growing Business, ноутбук на білому столі"
                    width="370"
                  />
                  <div className="project__text-wrap">
                    <p>
                      Ресурс пропонує комплексні пропозиції з різним рівнем
                      функціоналу та сервісів. Все це дозволить відвідувачу
                      отримати вичерпні відомості про компанію чи приватну
                      особу.
                    </p>
                  </div>
                </div>
                <div className="project__info-wrap">
                  <h2 className="project__title" lang="en">Growing Business</h2>
                  <p className="project__description">Додаток</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
             </section>
  )
}

export default Gallery
  