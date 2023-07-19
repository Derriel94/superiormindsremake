import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const Blogs = ({blogs}) => {

     const featuredVariants = {
      initial: {opacity: 0, y: -1000},
      animate: {opacity: 1, y: 0, transition: {
         duration: 2.5, bounce: 0.3, type: "spring",
      }},

    };
    console.log(blogs.blogs[0].title)
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
			        transition={{delay: 1.5, duration: 1}}>{blogs.blogs[1].title}</motion.h2>
		        <motion.p className="bloginfo-short"
		        	initial={{opacity: 0}}
			        animate={{opacity: 1}}
			        transition={{delay: 1.7, duration: 1}}>{blogs.blogs[1].description}</motion.p>
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
			        transition={{delay: 1.5, duration: 1}}>{blogs.blogs[2].title}</motion.h2>
		        <motion.p className="bloginfo-short"
		        	initial={{opacity: 0}}
			        animate={{opacity: 1}}
			        transition={{delay: 1.7, duration: 1}}>{blogs.blogs[2].description}</motion.p>
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
			      	<div><Link to="/">Read More..</Link></div>
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