import './App.css'
import { useState, ChangeEvent, useEffect } from "react";
import { motion } from "framer-motion";
import Nav from "./components/Nav"
import Search from "./components/Search.tsx"
import RouterNav from "./router/RouterNav.tsx"
import { useAuthState } from "react-firebase-hooks/auth";
import {NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {db, auth, logout} from "./firebaseConfig.tsx"
import { collection, onSnapshot, orderBy, query, setDoc, doc, updateDoc, addDoc, arrayUnion } from "firebase/firestore";


const App = () => {
  const [user, loading, error] = useAuthState(auth);
  const [search, setSearch] = useState<string>("search")
  const [displayName, setDisplayName] = useState<string>('');
  const navigate = useNavigate();
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }
  const handleSubmit = () => {
 
  }
    const [blogs, setBlogs] = useState<array>([{title: "temp", desc: "temporary"},{title: "temp", desc: "temporary"},{title: "temp", desc: "temporary"}]);

  useEffect(()=>{
    const articleRef = collection(db, "blogs");
    const q = query(articleRef, orderBy("createdAt"));
    onSnapshot(q,(snapshot)=>{
      const blogs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogs);
      console.log(blogs[0]);
    });
  },[])

    const headerVariants = {
      initial: {opacity: 0, y: -35},
      animate: {opacity: 1, y: 0, transition: {
        delay: .2, duration: 1,
      }},

    };

  const checkIfLoggedIn = () => {
    const check = localStorage.getItem('user');
         if (check) {
          setDisplayName(check); 
          if (check == "MadMac")  {
                navigate('/editor');
            } else {
                navigate('/blogs');
            }
         } else {
          if (loading) return;
          if (user){
            setDisplayName(user.displayName)
            if (user.displayName == "MadMac")  {
                navigate('/editor');
            } else {
                navigate('/blogs');
            }
            }
           }
    }

  const signOut = () => {
    logout();
    localStorage.removeItem('user');
    location.reload();
    navigate('/login')
    setDisplayName('');
  }

  useEffect(()=> {
    checkIfLoggedIn();    
    // setDisplayName('');
  }, [displayName])
  console.log(user);
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
        <Search />
        </div>
      </motion.div>
      <Nav />
      <RouterNav blogs={{blogs}} displayName={displayName} setDisplayName={setDisplayName}/>
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
