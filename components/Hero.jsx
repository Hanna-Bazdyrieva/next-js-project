"use client";
import { useState } from "react";
import Modal from "./Modal";

function Hero() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<section className="hero section">
				<div className="hero__container">
					<h1 className="hero__title">Ефективні рішення для вашого бізнесу</h1>
					<button
						type="button"
						className="button hero__button"
						onClick={() => setIsModalOpen(true)}
					>
						Замовити послугу
					</button>
				</div>
			</section>
			{isModalOpen && <Modal closeModal={setIsModalOpen} />}
		</>
	);
}

export default Hero;
