import { motion } from "framer-motion";
import { useRef, useEffect, useState} from "react";

interface MusicProps { 
	
};


const Music = ({}: MusicProps) => {

	let [currentIndex, setCurrentIndex] = useState<number>(0);

	const MusicVideoList = [	
	{
		name: "Pluto's Plight To Soar",
		url: "https://www.youtube.com/embed/Mjq54rXPsyg",
	},
	{
		name: "Rising From The Grave Freestyle",
		url: "https://www.youtube.com/embed/FrUdI4EjGMs",
	},
	{
		name: "Tuesday Afternoon",
		url: "https://www.youtube.com/embed/oTcJ9F6SWpg",
	},]

	const gotoNextSlide =()=> {
		
		if (currentIndex == MusicVideoList.length - 1){
			setCurrentIndex(0)
		} else {
			currentIndex++
			setCurrentIndex(currentIndex)
		}
	}

	const gotoPrevSlide =()=> {
		if (currentIndex == 0) {
			setCurrentIndex(MusicVideoList.length - 1)
		} else {
			currentIndex--
			setCurrentIndex(currentIndex)
		}
		
	}
	return (
			<div className="music">
				<h1 style={{textAlign: "center"}}>Music</h1>
				<div className="slider">
					<motion.button 
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{ duration: 1.5, repeat: Infinity}}
					onClick={gotoPrevSlide}>⇚</motion.button>		
				 		<motion.div 
				 		initial={{x: -500}}
						animate={{x: 0}}
						exit={{x: -500}}
						whileTap={{x: 0}}
						transition={{ duration: 1.5}}
				 		className="inner-slide">
								<iframe 
								width="760" 
								height="515" 
								src={MusicVideoList[currentIndex].url} 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay;
								 clipboard-write; encrypted-media; 
								 gyroscope; picture-in-picture; web-share" 
								allowFullScreen />
						</motion.div>
					<motion.button 
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{ duration: 1.5, repeat: Infinity}}
					onClick={gotoNextSlide}>⇛</motion.button>
				</div>
			</div>
		);
};


export default Music;