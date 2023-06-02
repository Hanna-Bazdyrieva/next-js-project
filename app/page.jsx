// import PropTypes from 'prop-types'
import { FcBusinesswoman, FcContacts, FcManager } from "react-icons/fc";
import { IconContext } from "react-icons";
import Feed from "@components/Feed";
import Hero from "@components/Hero";
import Features from "@components/Features";
import Activities from "@components/Activities";
import Team from "@components/Team";
import Clients from "@components/Clients";

function Home() {
	return (
		<>
			<Hero />
      <Features/>
      <Activities/>
      <Team/>
      <Clients/>
		</>
	);
}

export default Home;
