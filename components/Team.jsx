import React from "react";

function Team() {
	return (
		<section className="team section section--no-margin-bottom">
			<div className="container team__container">
				<h2 className="team__title title">Наша команда</h2>
				<ul className="team__list">
					<li className="team__card">
						<picture>
							<source
								srcSet="
                   /images/team1-img-1x.jpg 1x,
                    /images/team1-img-2x.jpg 2x
                  "
								media="(min-width: 1200px)"
							/>
							<source
								srcSet="
                    /images/team1-img-tab-1x.jpg 1x,
                    /images/team1-img-tab-2x.jpg 2x
                  "
								media="(min-width: 768px)"
							/>
							<source
								srcSet="
                    /images/team1-img-mob-1x.jpg 1x,
                    /images/team1-img-mob-2x.jpg 2x
                  "
								media="(max-width: 767px)"
							/>
							<img
								className="team-image"
								src="/images/team1-img-1x.jpg"
								alt="Ігор Дем'яненко, фото"
								width="450"
								height="460"
							/>
						</picture>
						<div className="team__details">
							<h3 className="team__name">Ігор Дем'яненко</h3>
							<p className="team__job" lang="en">
								Product Designer
							</p>
						</div>
						<ul className="socials team__socials">
							<li className="socials__item">
								<a href="" className="socials__link">
									<svg className="socials__icon" width="20" height="20">
										<use href="/icons/icons.svg#instagram"></use>
									</svg>
								</a>
							</li>
							<li className="socials__item">
								<a href="" className="socials__link">
									<svg className="socials__icon" width="20" height="20">
										<use href="/icons/icons.svg#twitter"></use>
									</svg>
								</a>
							</li>
							<li className="socials__item">
								<a href="" className="socials__link">
									<svg className="socials__icon" width="20" height="20">
										<use href="/icons/icons.svg#facebook"></use>
									</svg>
								</a>
							</li>
							<li className="socials__item">
								<a href="" className="socials__link">
									<svg className="socials__icon" width="20" height="20">
										<use href="/icons/icons.svg#linkedin"></use>
									</svg>
								</a>
							</li>
						</ul>
					</li>
					<li className="team__card">
						<picture>
							<source
								srcSet="
                    /images/team2-img-1x.jpg 1x,
                    /images/team2-img-2x.jpg 2x
                  "
								media="(min-width: 1200px)"
							/>
							<source
								srcSet="
                    /images/team2-img-tab-1x.jpg 1x,
                    /images/team2-img-tab-2x.jpg 2x
                  "
								media="(min-width: 768px)"
							/>
							<source
								srcSet="
                    /images/team2-img-mob-1x.jpg 1x,
                    /images/team2-img-mob-2x.jpg 2x
                  "
								media="(max-width: 767px)"
							/>
							<img
								className="team-image"
								src="/images/team2-img-1x.jpg"
								alt="Ольга Рєпіна, фото"
								width="450"
								height="460"
							/>
						</picture>
						<div className="team__details">
							<h3 className="team__name">Ольга Рєпіна</h3>
							<p className="team__job" lang="en">
								Frontend Developer
							</p>
						</div>
						<ul className="socials team__socials">
							<li className="socials__item">
								<a href="" className="socials__link">
									<svg className="socials__icon" width="20" height="20">
										<use href="/icons/icons.svg#instagram"></use>
									</svg>
								</a>
							</li>
							<li className="socials__item">
								<a href="" className="socials__link">
									<svg className="socials__icon" width="20" height="20">
										<use href="/icons/icons.svg#twitter"></use>
									</svg>
								</a>
							</li>
							<li className="socials__item">
								<a href="" className="socials__link">
									<svg className="socials__icon" width="20" height="20">
										<use href="/icons/icons.svg#facebook"></use>
									</svg>
								</a>
							</li>
							<li className="socials__item">
								<a href="" className="socials__link">
									<svg className="socials__icon" width="20" height="20">
										<use href="/icons/icons.svg#linkedin"></use>
									</svg>
								</a>
							</li>
						</ul>
					</li>
					<li className="team__card">
						<picture>
							<source
								srcSet="
                    /images/team3-img-1x.jpg 1x,
                    /images/team3-img-2x.jpg 2x
                  "
								media="(min-width: 1200px)"
							/>
							<source
								srcSet="
                    /images/team3-img-tab-1x.jpg 1x,
                    /images/team3-img-tab-2x.jpg 2x
                  "
								media="(min-width: 768px)"
							/>
							<source
								srcSet="
                    /images/team3-img-mob-1x.jpg 1x,
                    /images/team3-img-mob-2x.jpg 2x
                  "
								media="(max-width: 767px)"
							/>
							<img
								className="team-image"
								src="/images/team3-img-1x.jpg"
								alt="Микола Тарасов, фото"
								width="450"
								height="460"
							/>
						</picture>
						<div className="team__details">
							<h3 className="team__name">Микола Тарасов</h3>
							<p className="team__job" lang="en">
								Marketing
							</p>
						</div>
						<ul className="socials team__socials">
							<li className="socials__item">
								<a href="" className="socials__link">
									<svg className="socials__icon" width="20" height="20">
										<use href="/icons/icons.svg#instagram"></use>
									</svg>
								</a>
							</li>
							<li className="socials__item">
								<a href="" className="socials__link">
									<svg className="socials__icon" width="20" height="20">
										<use href="/icons/icons.svg#twitter"></use>
									</svg>
								</a>
							</li>
							<li className="socials__item">
								<a href="" className="socials__link">
									<svg className="socials__icon" width="20" height="20">
										<use href="/icons/icons.svg#facebook"></use>
									</svg>
								</a>
							</li>
							<li className="socials__item">
								<a href="" className="socials__link">
									<svg className="socials__icon" width="20" height="20">
										<use href="/icons/icons.svg#linkedin"></use>
									</svg>
								</a>
							</li>
						</ul>
					</li>
					<li className="team__card">
						<picture>
							<source
								srcSet="
                    /images/team4-img-1x.jpg 1x,
                    /images/team4-img-2x.jpg 2x
                  "
								media="(min-width: 1200px)"
							/>
							<source
								srcSet="
                    /images/team4-img-tab-1x.jpg 1x,
                    /images/team4-img-tab-2x.jpg 2x
                  "
								media="(min-width: 768px)"
							/>
							<source
								srcSet="
                    /images/team4-img-mob-1x.jpg 1x,
                    /images/team4-img-mob-2x.jpg 2x
                  "
								media="(max-width: 767px)"
							/>
							<img
								className="team-image"
								src="/images/team4-img-1x.jpg"
								alt="Михайло Єрмаков, фото"
								width="450"
								height="460"
							/>
						</picture>

						<div className="team__details">
							<h3 className="team__name">Михайло Єрмаков</h3>
							<p className="team__job" lang="en">
								UI Designer
							</p>
						</div>
						<ul className="socials team__socials">
							<li className="socials__item">
								<a href="" className="socials__link">
									<svg className="socials__icon" width="20" height="20">
										<use href="/icons/icons.svg#instagram"></use>
									</svg>
								</a>
							</li>
							<li className="socials__item">
								<a href="" className="socials__link">
									<svg className="socials__icon" width="20" height="20">
										<use href="/icons/icons.svg#twitter"></use>
									</svg>
								</a>
							</li>
							<li className="socials__item">
								<a href="" className="socials__link">
									<svg className="socials__icon" width="20" height="20">
										<use href="/icons/icons.svg#facebook"></use>
									</svg>
								</a>
							</li>
							<li className="socials__item">
								<a href="" className="socials__link">
									<svg className="socials__icon" width="20" height="20">
										<use href="/icons/icons.svg#linkedin"></use>
									</svg>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Team;
