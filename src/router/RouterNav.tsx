import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./../pages/Home.tsx";
import Blogs from "./../pages/Blogs.tsx";
import Music from "./../pages/Music.tsx";
import Searched from "./../pages/Searched.tsx";
import VoiceOver from "./../pages/VoiceOver.tsx";

interface RouterProps { 
	
};


const RouterNav = ({}: RouterProps) => {

	return (
			<Routes>  	
				<Route path="/" element={<Navigate to='home'/>} />
		      	<Route path="/blogs" element={<Blogs />} />
		      	<Route path="/searched" element={<Searched />} />
		      	<Route path="/music" element={<Music />} />
		      	<Route path="/voiceover" element={<VoiceOver />} />
		      	<Route path="/home" element={<Home />} />
	      	</Routes>
		);
};

export default RouterNav;