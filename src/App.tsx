import './App.css'
import { useState, ChangeEvent, useEffect } from "react";
import { motion } from "framer-motion";
import Nav from "./components/Nav"
import RouterNav from "./router/RouterNav.tsx"
import {NavLink} from "react-router-dom";
import { logout } from "./firebaseConfig.tsx";
import { useNavigate } from "react-router-dom";


const App = () => {

  const [search, setSearch] = useState<string>("search")
  const [displayName, setDisplayName] = useState<string>('');
  const navigate = useNavigate();
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

  const checkIfLoggedIn = () => {
     
    }

  const signOut = () => {
    localStorage.removeItem('user');
    setDisplayName('');
    logout();
    location.reload();
  }

  useEffect(()=> {
    checkIfLoggedIn();    
    // setDisplayName('');
  }, [])

  return (
    <div className="app">
  
      <motion.div 
      className="header"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={headerVariants}>
        <div><p style={{opacity: .9}}>What Did You Learn Today?</p></div>
          <div>
           {displayName.length > 0?
            <div>
              <div id="link" style={{fontSize: ".8rem"}}>{displayName}</div>
              <button  onClick={signOut}>Sign Out</button>
            </div>
            :
            <div><NavLink id="link" style={{fontSize: ".8rem"}} to="/login">login/register</NavLink></div>
            
            }
          <input placeholder={search} className="search" onChange={(e)=>handleSearchChange(e)}/>
          <input type="submit" value="GO" onClick={handleSubmit} className="gobutton" />
        </div>
      </motion.div>
      <Nav />
      <RouterNav />
      <div className="footer">
        <h1>Social Media</h1>
        <div>
          <a href=" https://linktr.ee/MadMac21" 
           target="_blank" 
           rel="noreferrer"
           style={{textDecoration: "none", color: "papayawhip"}}> LinkTree 
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/macstract/?hl=af"
           target="_blank"
           rel="noreferrer"
           style={{textDecoration: "none", color: "papayawhip"}}>Instagram: Macstract 
           </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/superior-minds-ink-869565207/"
             target="_blank"
             rel="noreferrer"
             style={{textDecoration: "none", color: "papayawhip"}}> Linkdein: Christain Mcbride 
             </a>
        </div>
        <div>
          <a href="https://www.youtube.com/channel/UCBHFh0ZVLkxTvwoYW3hLZ9Q/featured"
             target="_blank"
             rel="noreferrer" 
             style={{textDecoration: "none", color: "papayawhip"}}> Youtube: Mad Mac 
             </a></div>
        </div>
    </div>
  )
}

export default App
