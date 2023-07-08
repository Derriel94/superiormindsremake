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
				src="./solosmall.svg" />
				<div className="bubblecontainer">
						<div style={{display: "flex",alignItems:"center",justifyContent: "space-around"}}>
						<motion.div 
							initial={{opacity: 0, marginLeft: "400px"}}
							animate={{opacity	:1, marginLeft: "0px"}}
							exit={{opacity	:1}}
							transition={{delay: 1, duration: 2}}
							className="hometextbubble pink"><h2>This will be a knowledge bubble that is pink</h2></motion.div>
						<div>This is what is revealed</div>
						</div>
						<div style={{display: "flex", alignItems:"center",justifyContent: "space-around"}}>
						<motion.div 
							initial={{opacity: 0, marginLeft: 0}}
							animate={{opacity	:1, marginLeft: "400px"}}
							exit={{opacity	:1}}
							transition={{delay: 1, duration: 2}}
							className="hometextbubble blue"><h2>This will be a knowledge bubble that is blue</h2></motion.div>
						<div>this is what is revealed</div>
						</div>
						<div style={{display: "flex",alignItems:"center",justifyContent: "space-around"}}>
						<motion.div initial={{opacity: 0, marginLeft: "400px"}}
							animate={{opacity	:1, marginLeft: "0px"}}
							exit={{opacity	:1}}
							transition={{delay: 1, duration: 2}}
							className="hometextbubble gold"><h2>This will be a knowledge bubble that is gold</h2></motion.div>
	      	
	      	<div>this is what is revealed</div>
	      	</div>
	      	</div>

      </div>
		);
};

export default Home;