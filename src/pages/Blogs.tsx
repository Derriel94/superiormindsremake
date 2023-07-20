import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const Blogs = ({blogs}) => {

     const featuredVariants = {
      initial: {opacity: 0, y: -1000},
      animate: {opacity: 1, y: 0, transition: {
         duration: 2.5, bounce: 0.3, type: "spring",
      }},

    };

	return (
		<div className="blogs">
		<h1 style={{textAlign: "center"}}>Creative Writing</h1>
		{blogs.blogs[0].title == "temp" ?
			<></>
		:
			<div>
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
			        transition={{delay: 1.5, duration: 1}}>{blogs.blogs[1].title.substring(0, 10)}</motion.h2>
		        <motion.p className="bloginfo-short"
		        	initial={{opacity: 0}}
			        animate={{opacity: 1}}
			        transition={{delay: 1.7, duration: 1}}>{blogs.blogs[1].description.substring(0, 100)}...</motion.p>
		        <motion.div
		        	initial={{opacity: 0}}
			        animate={{opacity: 1}}
			        transition={{delay: 2, duration: 1}}>
		        	<Link className="fullbloglink" to={`${blogs.blogs[1].id}`}>Read More..</Link>
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
			        transition={{delay: 1.5, duration: 1}}>{blogs.blogs[2].title.substring(0, 25)}</motion.h2>
		        <motion.p className="bloginfo-short"
		        	initial={{opacity: 0}}
			        animate={{opacity: 1}}
			        transition={{delay: 1.7, duration: 1}}>{blogs.blogs[2].description.substring(0, 100)}...</motion.p>
		        <motion.div
		        	initial={{opacity: 0}}
			        animate={{opacity: 1}}
			        transition={{delay: 2, duration: 1}}>
		        	<Link className="fullbloglink" to={`${blogs.blogs[2].id}`}>Read More..</Link>
		        </motion.div>	
	        </motion.div>
	      </motion.div>
	      <div
	      	className="smallblogsection">
	      	{
	      		blogs.blogs.map((blog)=> {
	      			return (
	      			<div>
			      	<img src={blog.imageUrl} />
			      	<h4>{blog.title}</h4>
			      	<p>{blog.description.substring(0, 100)}...</p>
			      	<div><Link id ="link" to={`${blog.id}`}>Read More..</Link></div>
		      	</div>)
	      		})
	      	}
		    
	      </div>
			</div>}
		
	
      </div>
		);
};

export default Blogs;