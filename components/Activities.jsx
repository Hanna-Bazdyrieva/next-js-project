import Image from 'next/image'
import React from 'react'

function Activities() {
  return (
    <section className="activities section section--no-padding">
    <div className="container">
      <h2 className="activities__title title">Чим ми займаємося</h2>
      <ul className="activities__list">
        <li className="activities__item">
          <div className="activities__thumb">
            <Image
              srcSet="/assets/images/activities1-1x.jpg 1x,
                /assets/images/activities1-2x.jpg 2x
              "
              src="/assets/images/activities1-1x.jpg"
              alt="Розроблений алгоритм перетворюється на програмний код"
              width="370" height="294"
            />
            <div className="activities__info">
              <p>Десктопні додатки</p>
            </div>
          </div>
        </li>
        <li className="activities__item">
          <div className="activities__thumb">
            <Image
              srcSet="
                /assets/images/activities2-1x.jpg 1x,
                /assets/images/activities2-2x.jpg 2x
              "
              src="/assets/images/activities2-1x.jpg"
              alt="На ноутбуці розробляють мобільний застосунок"
              width="370" height="294"
            />
            <div className="activities__info">
              <p>Мобільні додатки</p>
            </div>
          </div>
        </li>
        <li className="activities__item">
          <div className="activities__thumb">
            <img
              srcSet="
                /assets/images/activities3-1x.jpg 1x,
                /assets/images/activities3-2x.jpg 2x
              "
              src="/assets/images/activities3-1x.jpg"
              alt="На графічному планшеті добирають кольори для дизайна"
              width="370" height="294"
            />
            <div className="activities__info">
              <p>Дизайнерські рішення</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
  )
}

export default Activities
