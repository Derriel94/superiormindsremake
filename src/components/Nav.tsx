import {NavLink} from "react-router-dom";
import { motion } from "framer-motion";



const Nav = () => {

	return (
			<div>
				<div className="mobilenav"> 
					<div><NavLink to="/home">Home</NavLink></div>
					<div><NavLink to="/blogs">Blogs</NavLink></div>
					<div><NavLink to="/music">Music</NavLink></div>
					<div><NavLink to="/home">Voice Overs</NavLink></div>
	      		</div>
	      		<motion.div 
	      		className="nav"
	      		initial={{y: 600}}
		    	animate={{y: 0}}
		    	transition={{delay: 1, duration: 1, type: "spring", bounce: .2}}> 
					<div><NavLink id="link" to="/home">Home</NavLink></div>
					<div><NavLink id="link" to="/blogs">Blogs</NavLink></div>
					<div><NavLink id="link" to="/music">Music</NavLink></div>
					<div><NavLink id="link" to="/home">Voice Overs</NavLink></div>
	      		</motion.div>
	      	</div>
		);
};

export default Nav;