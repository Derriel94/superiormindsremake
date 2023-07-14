import { motion } from "framer-motion";
import { useState} from "react";

interface VoiceOverProps { 
	
};


const VoiceOver = ({}: VoiceOverProps) => {
let [currentIndex, setCurrentIndex] = useState<number>(0);

	const VoiceOverList = [	
	{

		url: "https://www.youtube.com/embed/lncLNw0bYeI",
	},
	{

		url: "https://www.youtube.com/embed/VymC8M2hEXI",
	},
	{

		url: "https://www.youtube.com/embed/43DZAR0PpD4",
	},]

	const gotoNextSlide =()=> {
		
		if (currentIndex == VoiceOverList.length - 1){
			setCurrentIndex(0)
		} else {
			currentIndex++
			setCurrentIndex(currentIndex)
		}
	}

	const gotoPrevSlide =()=> {
		if (currentIndex == 0) {
			setCurrentIndex(VoiceOverList.length - 1)
		} else {
			currentIndex--
			setCurrentIndex(currentIndex)
		}
		
	}
	return (
			<div className="Voiceover">
				<h1>Voice Overs</h1>
				<div className="slider">
					<motion.button 
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{ duration: 1.5, repeat: Infinity}}
					onClick={gotoPrevSlide}>⇚</motion.button>		
				 		<motion.div 
				 		initial={{y: -500}}
						animate={{y: 0}}
						exit={{y: -500}}
						whileTap={{y: 0}}
						transition={{ duration: 1.5}}
				 		className="inner-slide">
								<iframe 
								width="760" 
								height="515" 
								src={VoiceOverList[currentIndex].url} 
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

export default VoiceOver;