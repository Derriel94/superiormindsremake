import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./../pages/Home.tsx";
import Blogs from "./../pages/Blogs.tsx";
import Music from "./../pages/Music.tsx";
import Searched from "./../pages/Searched.tsx";
import VoiceOver from "./../pages/VoiceOver.tsx";
import Contact from "./../pages/Contact.tsx";
import Bio from "./../pages/Bio.tsx";
import Login from "./../components/Login.tsx";
import Editor from "./../components/Editor.tsx";

interface RouterProps { 
	
};


const RouterNav = ({}: RouterProps) => {

	return (
			<Routes>  	
				<Route path="/" element={<Navigate to='/home'/>} />
		      	<Route path="/blogs" element={<Blogs />} />
		      	<Route path="/searched" element={<Searched />} />
		      	<Route path="/music" element={<Music />} />
		      	<Route path="/voiceover" element={<VoiceOver />} />
		      	<Route path="/bio" element={<Bio />} />
		      	<Route path="/contact" element={<Contact />} />
		      	<Route path="/login" element={<Login />} />
		      	<Route path="/editor" element={<Editor />} />
		      	<Route path="/home" element={<Home />} />
	      	</Routes>
		);
};

export default RouterNav;