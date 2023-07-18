import {useState, useEffect, ChangeEvent} from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, signin, logout } from "./../firebaseConfig.tsx";

interface LoginProps { 
	
};


const Login = ({}: LoginProps) => {

	const [loggedInSwitch, setLoggedInSwitch] = useState<boolean>(true);
	const [email, setEmail] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [login, setLogin] = useState<boolean>(false);
	const navigate = useNavigate();
	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    	setEmail(e.target.value);
  	}
  	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    	setPassword(e.target.value);
  	}
  	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    	setName(e.target.value);
  	}
  	const handleLoginRegister = () => {
  		if (login) {
  			setLogin(false)
  		} else {
  			setLogin(true)
  		}
  	}
  	const handleSubmit = async () => {
    	if (login)
    	{
    		const res = await signin(email, password);
    		alert(res);
    		localStorage.setItem("user", res);
    		location.reload();
    		 // const check = localStorage.getItem('user');
		     //  setDisplayName(check);  
		      if (res == 'MadMacs') {
		         navigate('/editor');
		      } else {
		      	navigate('/home')
		      }

    	} else {
    		const res = await registerUser(email, password, name);
    		console.log(res);
    		localStorage.setItem("user", res);
    		location.reload();
    	}
  	}
  	const checkIfLoggedIn = () => {
  		// const check = localStorage.getItem('user');
  		// if (check) {
  		// 	navigate('/home');
  		// } 
  	}

	useEffect(()=> {
		checkIfLoggedIn();
		if (loggedInSwitch) {
		
		} else {
			
		}
		
	}, [])

	return (
			<div className="login-register">
				{login?
				<div>
					<h2>Login</h2>
					{/*add form rules for passwords and emails*/}
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
					<button onClick={handleLoginRegister}>Register</button>
				</div>
		
				:

				<div>
					<h2>Register</h2>
					{/*add form rules for passwords and emails*/}
					<div>
						<div>Email</div>
						<input type="text" onChange={(e)=>handleEmailChange(e)}/>
					</div>
					<div>
						<div>Password</div>
						<input type="text" onChange={(e)=>handlePasswordChange(e)}/>
					</div>
					<div>
						<div>User Name</div>
						<input type="text" onChange={(e)=>handleNameChange(e)}/>
					</div>
					<div>
						<input style={{marginTop: "10px", cursor: "pointer"}}type="submit" value="submit" onClick={handleSubmit}/>
					</div>
					<button onClick={handleLoginRegister}>Login</button>		
				</div>
	
			}
		
			
	      	</div>
		);
};

export default Login;