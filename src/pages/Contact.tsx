import {useState} from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const Contact = ({}: RouterProps) => {
	const [formStatus, setFormStatus] = useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
	return (
		<div className="contact">
			<div style={{textAlign: "center"}}>
				<h1>Contact Christian</h1>
			</div>
			<div className="">
			    
			      <form style={{marginTop: "clamp(30px,20px,50px)", textAlign:"center", display: "flex", flexDirection: "column",alignItems: "center"}}
			      		onSubmit={onSubmit}>
			        <div className="">
			          <h4 className="" htmlFor="name">
			            Name
			          </h4>
			          <input className="form-control" type="text" id="name" required />
			        </div>
			        <div className="">
			          <h4 className="" htmlFor="email">
			            Email
			          </h4>
			          <input className="form-control" type="email" id="email" required />
			        </div>
			        <div className="">
			          <h4 className="" htmlFor="message">
			            Message
			          </h4>
			          <textArea className="form-control" id="message" required />
			        </div>
			        <button className="btn btn-danger" type="submit">
			          {formStatus}
			        </button>
			      </form>
    		</div>
      </div>
		);
};

export default Contact;