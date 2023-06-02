import "@styles/globals.scss";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Header from "@components/Header";

export const metadata = {
	title: " Phonebook",
	description: "Keep and get your contacts",
};

function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<div className="main">
					<div className="gradient" />
				</div>

				<main className="app">
					{/* <div className="container"> */}
<Header/>
					{/* <Nav/> */}
					{children}
					{/* </div> */}
					</main>
			</body>
		</html>
	);
}

// layout.propTypes = {

// }

export default RootLayout;
