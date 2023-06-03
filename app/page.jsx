import Hero from "@components/Hero";
import Features from "@components/Features";
import Activities from "@components/Activities";
import Team from "@components/Team";
import Clients from "@components/Clients";

function Home(props) {
	return (
		<>
			<Hero />
			<Features />
			<Activities />
			<Team />
			<Clients />
		</>
	);
}

export default Home;
