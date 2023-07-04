import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const Home = ({}: RouterProps) => {

	return (
		<div className="home">
				<motion.img 
				initial={{opacity: 0}}
				animate={{opacity	:1}}
				exit={{opacity	:1}}
				transition={{delay: 1, duration: 2}}
				className	="mainimg"
				src="./soloflip.svg" />
				<div className="hometextbubble pink">This will be a knowledge bubble that is pink</div>
				<div className="hometextbubble blue">This will be a knowledge bubble that is blue</div>
				<div className="hometextbubble gold">This will be a knowledge bubble that is gold</div>
      </div>
		);
};

export default Home;