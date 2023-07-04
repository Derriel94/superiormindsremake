import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./../pages/Home.tsx";
import Blogs from "./../pages/Blogs.tsx";

interface RouterProps { 
	
};


const RouterNav = ({}: RouterProps) => {

	return (
			<Routes>  	
				<Route path="/" element={<Navigate to='home'/>} />
		      	<Route path="/blogs" element={<Blogs />} />
		      	<Route path="/home" element={<Home />} />
	      	</Routes>
		);
};

export default RouterNav;