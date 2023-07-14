import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const Blogs = () => {

     const featuredVariants = {
      initial: {opacity: 0, y: -1000},
      animate: {opacity: 1, y: 0, transition: {
         duration: 2.5, bounce: 0.3, type: "spring",
      }},

    };

	return (
		<div className="blogs">
		<h1 style={{textAlign: "center"}}>Creative Writing</h1>
			<motion.div
		        className="featuredblog"
		        initial="initial"
		        animate="animate"
		        exit="exit"
		        variants={featuredVariants}>
	        <img src="./2.jpg" />
	        <motion.div 
	        	className="featuredbloghomepageinfo"
	        	initial={{x: 900}}
			    animate={{x: 0}}
			    transition={{delay: 1, duration: 1}}>
		        <motion.h2 className="blogtitle"
		        	initial={{opacity: 0}}
			        animate={{opacity: 1}}
			        transition={{delay: 1.5, duration: 1}}>Why you need To Learn!</motion.h2>
		        <motion.p className="bloginfo-short"
		        	initial={{opacity: 0}}
			        animate={{opacity: 1}}
			        transition={{delay: 1.7, duration: 1}}>Well at this point
		        I am just looking for something to say. It really is difficult
		        to "freestyle" words into something that your not in any way shape
		        or form thinking about. Like It really is hard...</motion.p>
		        <motion.div
		        	initial={{opacity: 0}}
			        animate={{opacity: 1}}
			        transition={{delay: 2, duration: 1}}>
		        	<Link className="fullbloglink" to="/blogs">Read More..</Link>
		        </motion.div>	
	        </motion.div>
	        <motion.div 
	        	className="featuredbloghomepageinfo2"
	        	initial={{x: -900}}
			    animate={{x: 0}}
			    transition={{delay: 1, duration: 1}}>
		        <motion.h2 className="blogtitle"
		        	initial={{opacity: 0}}
			        animate={{opacity: 1}}
			        transition={{delay: 1.5, duration: 1}}>Stay Slow!</motion.h2>
		        <motion.p className="bloginfo-short"
		        	initial={{opacity: 0}}
			        animate={{opacity: 1}}
			        transition={{delay: 1.7, duration: 1}}>Stay Slow, a fast mind
			        is a mind that can hold an ounce of love for the will power
			        that you wish to show.</motion.p>
		        <motion.div
		        	initial={{opacity: 0}}
			        animate={{opacity: 1}}
			        transition={{delay: 2, duration: 1}}>
		        	<Link className="fullbloglink" to="/blogs">Read More..</Link>
		        </motion.div>	
	        </motion.div>
	      </motion.div>
	      <div
	      	className="smallblogsection">
		      	<div>
			      	<img src="./2.jpg" />
			      	<h4> Voice Actor</h4>
			      	<p>Using my voice to save the world 1 syllable at a time.</p>
			      	<div><Link to="/">Here More..</Link></div>
		      	</div>
		      	<div>
			      	<img src="./2.jpg" />
			      	<h4> Voice Actor</h4>
			      	<p>Using my voice to save the world 1 syllable at a time.</p>
		      	<div><Link to="/">Read More..</Link></div>
	      	</div>
	      	<div>
			      	<img src="./2.jpg" />
			      	<h4> Voice Actor</h4>
			      	<p>Using my voice to save the world 1 syllable at a time.</p>
		      	<div><Link to="/">Read More..</Link></div>
	      	</div>
	      </div>
      </div>
		);
};

export default Blogs;