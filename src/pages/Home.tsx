import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const Home = ({}: RouterProps) => {

	return (
		<div className="home">
			<div style={{textAlign: "center"}}>
				<h1>Christian Mcbride</h1>
				<motion.img 
				initial={{opacity: 0}}
				animate={{opacity	:1}}
				transition={{delay: 1, duration: 3}}
				className	="mainimg"
				src="./headshot.svg" />
			</div>
				<div className="bubblecontainer">
						<div style={{display: "flex",alignItems:"center",justifyContent: "space-around"}}>
						<motion.div 
							initial={{opacity: 0, marginLeft: "400px"}}
							animate={{opacity	:1, marginLeft: "0px"}}
							exit={{opacity	:1}}
							transition={{delay: 1, duration: 2}}
							className="hometextbubble pink"><h2>Voice Actor </h2></motion.div>				
						</div>
						<div style={{display: "flex", alignItems:"center",justifyContent: "space-around"}}>
						<motion.div 
							initial={{opacity: 0, marginLeft: 0}}
							animate={{opacity	:1, marginLeft: "400px"}}
							exit={{opacity	:1}}
							transition={{delay: 1, duration: 2}}
							className="hometextbubble blue"><h2>Singer Songwriter</h2></motion.div>
				
						</div>
						<div style={{display: "flex",alignItems:"center",justifyContent: "space-around"}}>
						<motion.div initial={{opacity: 0, marginLeft: "400px"}}
							animate={{opacity	:1, marginLeft: "0px"}}
							exit={{opacity	:1}}
							transition={{delay: 1, duration: 2}}
							className="hometextbubble gold"><h2>Creative Writer</h2></motion.div>
	      	
	      				</div>
	      		</div>

      </div>
		);
};

export default Home;