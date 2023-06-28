import './App.css'
import { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";
import Nav from "./components/Nav"
import Home from "./pages/Home";

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



  return (
    <div className="app">
      <motion.div 
      className="header"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={headerVariants}>
        <div><p style={{color: "gold", opacity: .9}}>What Did You Learn Today?</p></div>
        <div>
          <input placeholder={search} className="search" onChange={(e)=>handleSearchChange(e)}/>
          <input type="submit" value="GO" onClick={handleSubmit} className="gobutton" />
        </div>
      </motion.div>
      <Nav />
      <Home />
    </div>
  )
}

export default App
