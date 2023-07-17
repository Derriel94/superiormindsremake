import { motion } from "framer-motion";
import {NavLink} from "react-router-dom";

const Home = () => {

	return (
		<div className="home">
			<motion.div 
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			transition={{delay: 1, duration: 3}}
			className="left-side">
				<h1>MadMac</h1>
				<img 
				className="mainimg"
				src="./headshot.svg" />
			</motion.div>
			<div className="mid-side">
				<p>My versatility with my voice is what makes me most unique, 
          I am a singer-songwriter. 
          I am a poet lyricists a rapper I can sing I can turn into your favorite 
          monster or narrate your true crime documentary. 
          I love every category I get to work in, I got my start in audiobooks. 
          I still do them but not as much since I have been exploring the wonderful world of voiceover. 
          I have met some amazing and notable producers and writers and videographers in my journey this business keeps a smile on my face.  
          I challenge myself daily with being the best voice artist I can possibly and I am absolutely passionate about what I do.</p>
			</div>
				<div className="right-side">
						<div style={{display: "flex",alignItems:"center",justifyContent: "space-around"}}>
						<motion.div 
							initial={{opacity: 0, marginLeft: "400px"}}
							animate={{opacity	:1, marginLeft: "0px"}}
							exit={{opacity	:1}}
							transition={{delay: 1, duration: 2}}
							className="">
							<div style={{position: "absolute", left: "-200px", top: "200px"}}>Play Demo ⇛</div>
							<div>
								<h2><NavLink id="link" to="/voiceover">Voice Actor</NavLink></h2>
								<iframe 
									width="315" 
									height="315" 
									src="https://www.youtube.com/embed/VymC8M2hEXI" 
									title="YouTube video player" 
									frameBorder="0" 
									allow="mute=1; autoplay;" 
									allowFullScreen />
							</div>
							<div style={{position: "absolute", left: "-200px", top: "630px"}}>Play Song ⇛</div>
							<div>
								<h2><NavLink id="link" to="/music">Singer Songwriter</NavLink></h2>
								<iframe 
									width="315" 
									height="315" 
									src="https://www.youtube.com/embed/Mjq54rXPsyg" 
									title="YouTube video player" 
									frameBorder="0" 
									allow="accelerometer; autoplay;
									 clipboard-write; encrypted-media; 
									 gyroscope; picture-in-picture; web-share" 
									allowFullScreen />
							</div>
							</motion.div>				
						</div>
						<div style={{display: "flex", alignItems:"center",justifyContent: "space-around"}}>
						<motion.div 
							initial={{opacity: 0, marginLeft: "400px"}}
							animate={{opacity	:1, marginLeft: "0px"}}
							exit={{opacity	:1}}
							transition={{delay: 1, duration: 2}}
							className=""><h2>Singer Songwriter</h2></motion.div>
						</div>
	      		</div>

      </div>
		);
};

export default Home;