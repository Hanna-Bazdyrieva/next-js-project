import React from "react";
import Nav from "./Nav";
import Image from "next/image";

// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector("[data-menu-open]"),
//     closeMenuBtn: document.querySelector("[data-menu-close]"),
//     menu: document.querySelector("[data-menu]"),
//     body: document.querySelector("body"),
//     menuList: document.querySelector(".mob-menu__list"),
//   };

//   refs.openMenuBtn.addEventListener("click", toggleMenu);
//   refs.closeMenuBtn.addEventListener("click", toggleMenu);
//   refs.menuList.addEventListener("click", removeMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle("is-hidden");
//     refs.body.classList.toggle("no-scroll");
//   }

//   function removeMenu() {
//     refs.menu.classList.add("is-hidden");
//     refs.body.classList.remove("no-scroll");
//   }
// })();

function Header() {
	return (
		<header className="header">
			<div className="container header__container">
				<Nav />
				<ul className="header__contacts">
					<li className="header__element">
						<a
							className="header__note header__note--tel"
							href="mailto:info@devstudio.com"
						>
							{/* <Image
								src="/icons/envelope.svg"
								alt="envelop"
								width={16}
								height={12}
								className="header__icon header__icon--email"
							/> */}
							<svg
								className="header__icon header__icon--email"
								width="16"
								height="12"
							>
								<use href='/icons/icons.svg#envelope'></use>
							</svg>
							info@devstudio.com
						</a>
					</li>
					<li className="header__element">
						<a
							className="header__note header__note--email"
							href="tel:+380961111111"
						>
							{/* <Image
								src="/icons/smartphone.svg"
								alt="envelop"
								width={12}
								height={18}
								className="header__icon header__icon--tel"
							/> */}
							<svg
								className="header__icon header__icon--tel"
								width="10"
								height="16"
							>
								<use href="/icons/icons.svg#smartphone"></use>
							</svg>
							+38 096 111 11 11
						</a>
					</li>
				</ul>
				<button type="button" className="menu__btn-open" data-menu-open>
					<svg width="40" height="40">
						<use
							className="menu__icon--menu"
							href="./images/icons.svg#icon-menu"
						></use>
					</svg>
				</button>
			</div>

			{/* <!-- mobile menu  --> */}

			{/* <div class="menu__container is-hidden" data-menu>
        <div class="menu__wrap container">
          <div class="menu__top-wrap">
            <button type="button" class="menu__btn-close" data-menu-close>
              <svg width="40" height="40">
                <use
                  class="menu__icon--close"
                  href="assets/images/icons.svg#icon-close_40"
                ></use>
              </svg>
            </button>
            <ul class="menu__navigation">
              <li class="menu__item">
                <a href="./index.html" class="menu__link menu__link--current"
                  >Студія</a
                >
              </li>
              <li class="menu__item">
                <a href="./portfolio.html" class="menu__link">Портфоліо</a>
              </li>
              <li class="menu__item">
                <a href="" class="menu__link">Контакти</a>
              </li>
            </ul>
          </div>
          <div class="menu__bottom-wrap">
            <ul class="menu__contacts">
              <li class="menu__element">
                <a class="menu__note menu__note--tel" href="tel:+380961111111">
                  +38 096 111 11 11</a
                >
              </li>
              <li class="menu__element">
                <a
                  class="menu__note menu__note--email"
                  href="mailto:info@devstudio.com"
                >
                  info@devstudio.com
                </a>
              </li>
            </ul>
            <ul class="menu__social-list">
              <li class="menu__soc-item">
                <a href="" class="menu__soc-link"> Instagram </a>
              </li>
              <li class="menu__soc-item">
                <a href="" class="menu__soc-link"> Twitter </a>
              </li>
              <li class="menu__soc-item">
                <a href="" class="menu__soc-link"> Facebook </a>
              </li>
              <li class="menu__soc-item">
                <a href="" class="menu__soc-link"> LinkedIn </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
		</header>
	);
}

export default Header;
