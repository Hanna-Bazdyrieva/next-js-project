// import Image from "next/image";

function Features() {
	return (
		<section className="feature section">
			<div className="container">
				<h2 className="feature__title feature__title--hide title">
					Наші пріоритети
				</h2>
				<ul className="feature__list">
					<li className="feature__item">
						<div className="feature__wrap">
							{/* <Image
								src="/icons/antenna.svg"
								alt="antenna"
								width={70}
								height={70}
								classNameName="feature__icon"
							/> */}

							<svg className="feature__icon" width="70" height="70">
								<use href="/icons/icons.svg#antenna"></use>
							</svg>
						</div>
						<h3 className="feature__headline">УВАГА ДО ДЕТАЛЕЙ</h3>
						<p className="feature__description">
							Ідейні міркування, і навіть початок повсякденної роботи з
							формування позиції.
						</p>
					</li>
					<li className="item feature__item">
						<div className="feature__wrap">
							{/* <Image
								src="/icons/astronaut.svg"
								alt="astronaut"
								width={70}
								height={70}
								classNameName="feature__icon"
							/> */}
							<svg className="feature__icon" width="70" height="70">
								<use href="/icons/icons.svg#astronaut"></use>
							</svg>
						</div>
						<h3 className="feature__headline">ПУНКТУАЛЬНІСТЬ</h3>
						<p>
							Завдання організації, особливо рамки і місце навчання кадрів тягне
							у себе.
						</p>
					</li>
					<li className="feature__item">
						<div className="feature__wrap">
							{/* <Image
								src="/icons/clock.svg"
								alt="clock"
								width={70}
								height={70}
								classNameName="feature__icon"
							/> */}
							<svg className="feature__icon" width="70" height="70">
								<use href="/icons/icons.svg#clock"></use>
							</svg>
						</div>
						<h3 className="feature__headline">ПЛАНУВАННЯ</h3>
						<p>
							Так само консультація з широким активом значною мірою зумовлює.
						</p>
					</li>
					<li className="feature__item">
						<div className="feature__wrap">
							{/* <Image
								src="/icons/diagram.svg"
								alt="diagram"
								width={70}
								height={70}
								classNameName="feature__icon"
							/> */}
							<svg className="feature__icon" width="70" height="70">
								<use href="/icons/icons.svg#diagram"></use>
							</svg>
						</div>
						<h3 className="feature__headline">СУЧАСНІ ТЕХНОЛОГІЇ</h3>
						<p>
							Значимість цих проблем настільки очевидна, що реалізація планових
							завдань.
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Features;
