// import PropTypes from 'prop-types'
import { FcBusinesswoman, FcContacts, FcManager } from "react-icons/fc";
import { IconContext } from "react-icons";
import Feed from "@components/Feed";
import Hero from "@components/Hero";
import Features from "@components/Features";
import Activities from "@components/Activities";
import Team from "@components/Team";

function Home(props) {
	return (
		<>
			<Feed />
			<Hero />
      <Features/>
      <Activities/>
      <Team/>
      <h2>End</h2>
		</>
	);
}

// Home.propTypes = {

// }

export default Home;
