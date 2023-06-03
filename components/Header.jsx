"use client";

import { useEffect, useState } from "react";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const useMediaQuery = (m, screen) => {
		const [matches, setMatches] = useState(false);

		useEffect(() => {
			const query = `(${m}-width: ${screen}px)`;
			const media = window.matchMedia(query);
			if (media.matches !== matches) {
				setMatches(media.matches);
			}
			const listener = () => setMatches(media.matches);
			window.addEventListener("resize", listener);
			return () => window.removeEventListener("resize", listener);
		}, [matches, screen]);

		return matches;
	};

	const isSmallScreen = useMediaQuery("max", 768);

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
								<use href="/icons/icons.svg#envelope"></use>
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
				{isSmallScreen && (
					<button
						type="button"
						className="menu__btn-open"
						onClick={() => setMenuOpen(true)}
					>
						<svg width="40" height="40">
							<use
								className="menu__icon--menu"
								href="/icons/icons.svg#icon-menu"
							></use>
						</svg>
					</button>
				)}
			</div>

			{menuOpen && <MobileMenu setMenu={setMenuOpen} />}
		</header>
	);
}

export default Header;
