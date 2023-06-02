import "@styles/globals.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";

export const metadata = {
	title: " Phonebook",
	description: "Keep and get your contacts",
};

function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				
				<main className="app">
					<Header />
					{children}
					<Footer/>
				</main>
			</body>
		</html>
	);
}

// layout.propTypes = {

// }

export default RootLayout;
