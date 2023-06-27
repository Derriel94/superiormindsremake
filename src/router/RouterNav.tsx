import { Route, Routes, Navigate } from "react-router-dom";

interface RouterProps { 
	
};


const RouterNav = ({}: RouterProps) => {

	return (
			<Routes>
				<Route path="/" element={<Navigate to='home'/>} />
		      	<Route path="/home" element={<Home />} />
	      	</Routes>
		);
};

export default RouterNav;