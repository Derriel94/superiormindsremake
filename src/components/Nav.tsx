import {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import { motion } from "framer-motion";



const Nav = () => {

	const [menuSwitch, setMenuSwitch] = useState<boolean>();
	const [menuName, setMenuName] = useState<boolean>("Menu");
	const toggleMenu = () => {
		if (menuSwitch) {
			setMenuSwitch(false);
			setMenuName("menu");
		} else {
			setMenuSwitch(true);
			setMenuName('close');
		}
	}

	useEffect(()=>{
		if (menuSwitch) {
			setMenuSwitch(false)
		}
	},[])

	return (
			<div className="nav-container">
				<button className="mobilenavbutton" onClick={toggleMenu}>{menuName}</button>
				{menuSwitch?
				<motion.div 
					className="mobilenav"> 
					<motion.div
					initial={{x: -100}}
		    		animate={{x: 0}}
		    		transition={{delay: 0, duration: 1, type: "spring", bounce: .2}}><NavLink id="link" to="/home">Home</NavLink></motion.div>
					<motion.div			
					initial={{x: -100}}
		    		animate={{x: 0}}
		    		transition={{delay: .2, duration: 1, type: "spring", bounce: .2}}><NavLink id="link" to="/blogs">Blogs</NavLink></motion.div>
					<motion.div
					initial={{x: -100}}
		    		animate={{x: 0}}
		    		transition={{delay: .4, duration: 1, type: "spring", bounce: .2}}
					><NavLink id="link" to="/music">Music</NavLink></motion.div>
					<motion.div
					initial={{x: -130}}
		    		animate={{x: 0}}
		    		transition={{delay: .6, duration: 1, type: "spring", bounce: .2}}
					><NavLink id="link" to="/voiceover">Voice Overs</NavLink></motion.div>
	      			<motion.div
					initial={{x: -130}}
		    		animate={{x: 0}}
		    		transition={{delay: .8, duration: 1, type: "spring", bounce: .2}}><NavLink id="link" to="/contact">Contact Mac</NavLink></motion.div>
	      		</motion.div>
	      		:
	      		<></>
				}
	      		<motion.div 
	      		className="nav"
	      		initial={{y: 600}}
		    	animate={{y: 0}}
		    	transition={{delay: 1, duration: 1, type: "spring", bounce: .2}}> 
					<div><NavLink id="link" to="/home">Home</NavLink></div>
					<div><NavLink id="link" to="/blogs">Blogs</NavLink></div>
					<div><NavLink id="link" to="/music">Music</NavLink></div>
					<div><NavLink id="link" to="/voiceover">Voice Overs</NavLink></div>
	      			<div><NavLink id="link" to="/contact">Contact Mac</NavLink></div>
	      		</motion.div>
	      	</div>
		);
};

export default Nav;