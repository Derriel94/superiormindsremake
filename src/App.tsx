import './App.css'
import { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";

const App = () => {

  const [search, setSearch] = useState<string>("search")
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }
  const handleSubmit = () => {
 
    }
    const headerVariants = {
      initial: {opacity: 0, y: -35},
      animate: {opacity: 1, y: 0, transition: {
        delay: .2, duration: 1,
      }},

    };

      const featuredVariants = {
      initial: {opacity: 0, x: 2000},
      animate: {opacity: 1, x: 0, transition: {
        delay: .4, duration: 1.5,
      }},

    };


  return (
    <div className="app">
      <motion.div 
      className="header"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={headerVariants}>
        <div><p>What Did You Learn Today?</p></div>
        <div>
          <input placeholder={search} className="search" onChange={(e)=>handleSearchChange(e)}/>
          <input type="submit" value="GO" onClick={handleSubmit} className="gobutton" />
        </div>
      </motion.div>
      <motion.div
        className="featuredblog"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={featuredVariants}>
        <img src="./2.jpg" />
      </motion.div>
    </div>
  )
}

export default App
