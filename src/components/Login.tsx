import {useState, useEffect, ChangeEvent} from "react";
import { useNavigate } from "react-router-dom";
interface LoginProps { 
	
};


const Login = ({}: LoginProps) => {

	const [loggedInSwitch, setLoggedInSwitch] = useState<boolean>(true);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    	setEmail(e.target.value);
  	}
  	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    	setEmail(e.target.value);
  	}

  	const handleSubmit = () => {
    	
  	}


	useEffect(()=> {
		if (loggedInSwitch) {
		
		} else {
			
		}
	}, [])

	return (
			<div className="login-register">
				<div>
					<h2>Login/Register</h2>
					<div>
						<div>Email</div>
						<input type="text" onChange={(e)=>handleEmailChange(e)}/>
					</div>
					<div>
						<div>Password</div>
						<input type="text" onChange={(e)=>handlePasswordChange(e)}/>
					</div>
					<div>
						<input style={{marginTop: "10px", cursor: "pointer"}}type="submit" value="submit" onClick={handleSubmit}/>
					</div>
					
				</div>
			
	      	</div>
		);
};

export default Login;