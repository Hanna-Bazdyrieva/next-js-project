import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileMenu({ setMenu }) {
	const pathname = usePathname();
	return (
		<div className="menu__container">
			<div className="menu__wrap container">
				<div className="menu__top-wrap">
					<button
						type="button"
						className="menu__btn-close"
						onClick={() => setMenu(false)}
					>
						<svg width="40" height="40">
							<use
								className="menu__icon--close"
								href="/icons/icons.svg#icon-close_40"
							></use>
						</svg>
					</button>
					<ul className="menu__navigation">
						<li className="menu__item">
							<a
								href="/"
								className={
									pathname === "/"
										? "menu__link menu__link--current"
										: "menu__link"
								}
							>
								Студія
							</a>
						</li>
						<li className="menu__item">
							<a
								href="/portfolio"
								className={
									pathname === "/portfolio"
										? "menu__link menu__link--current"
										: "menu__link"
								}
							>
								Портфоліо
							</a>
						</li>
						<li className="menu__item">
							<a href="/" className="menu__link">
								Контакти
							</a>
						</li>
					</ul>
				</div>
				<div className="menu__bottom-wrap">
					<ul className="menu__contacts">
						<li className="menu__element">
							<a
								className="menu__note menu__note--tel"
								href="tel:+380961111111"
							>
								+38 096 111 11 11
							</a>
						</li>
						<li className="menu__element">
							<a
								className="menu__note menu__note--email"
								href="mailto:info@devstudio.com"
							>
								info@devstudio.com
							</a>
						</li>
					</ul>
					<ul className="menu__social-list">
						<li className="menu__soc-item">
							<a href="" className="menu__soc-link">
								{" "}
								Instagram{" "}
							</a>
						</li>
						<li className="menu__soc-item">
							<a href="" className="menu__soc-link">
								{" "}
								Twitter{" "}
							</a>
						</li>
						<li className="menu__soc-item">
							<a href="" className="menu__soc-link">
								{" "}
								Facebook{" "}
							</a>
						</li>
						<li className="menu__soc-item">
							<a href="" className="menu__soc-link">
								{" "}
								LinkedIn{" "}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default MobileMenu;
