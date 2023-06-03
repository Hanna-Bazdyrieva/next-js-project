"use client";

import "@styles/globals.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Modal from "@components/Modal";
import { useEffect, useState } from "react";

export const metadata = {
	title: " Next.js Project",
	description: "WebStudio site on Next.js",
};

function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				<main >{children}</main>
				<Footer />
			</body>
		</html>
	);
}

// layout.propTypes = {

// }

export default RootLayout;
