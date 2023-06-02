import Image from "next/image";

function Features() {
  return (
    <section class="feature section">
        <div class="container">
          <h2 class="feature__title feature__title--hide title">
            Наші пріоритети
          </h2>
          <ul class="feature__list">
            <li class="feature__item">
              <div class="feature__wrap">
              <Image
								src="/assets/icons/antenna.svg"
								alt="antenna"
								width={70}
								height={70}
								className="feature__icon"
							/>

                {/* <svg class="feature__icon" width="70" height="70">
                  <use href="./images/icons.svg#antenna"></use>
                </svg> */}
              </div>
              <h3 class="feature__headline">УВАГА ДО ДЕТАЛЕЙ</h3>
              <p class="feature__description">
                Ідейні міркування, і навіть початок повсякденної роботи з
                формування позиції.
              </p>
            </li>
            <li class="item feature__item">
              <div class="feature__wrap">
              <Image
								src="/assets/icons/astronaut.svg"
								alt="astronaut"
								width={70}
								height={70}
								className="feature__icon"
							/>
                {/* <svg class="feature__icon" width="70" height="70">
                  <use href="./images/icons.svg#astronaut"></use>
                </svg> */}
              </div>
              <h3 class="feature__headline">ПУНКТУАЛЬНІСТЬ</h3>
              <p>
                Завдання організації, особливо рамки і місце навчання кадрів
                тягне у себе.
              </p>
            </li>
            <li class="feature__item">
              <div class="feature__wrap">
              <Image
								src="/assets/icons/clock.svg"
								alt="clock"
								width={70}
								height={70}
								className="feature__icon"
							/>
                {/* <svg class="feature__icon" width="70" height="70">
                  <use href="./images/icons.svg#clock"></use>
                </svg> */}
              </div>
              <h3 class="feature__headline">ПЛАНУВАННЯ</h3>
              <p>
                Так само консультація з широким активом значною мірою зумовлює.
              </p>
            </li>
            <li class="feature__item">
              <div class="feature__wrap">
              <Image
								src="/assets/icons/diagram.svg"
								alt="diagram"
								width={70}
								height={70}
								className="feature__icon"
							/>
                {/* <svg class="feature__icon" width="70" height="70">
                  <use href="assets/icons/diagram.svg"></use>
                </svg> */}
              </div>
              <h3 class="feature__headline">СУЧАСНІ ТЕХНОЛОГІЇ</h3>
              <p>
                Значимість цих проблем настільки очевидна, що реалізація
                планових завдань.
              </p>
            </li>
          </ul>
        </div>
      </section>
  )
}

export default Features
