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
		<div className="Contact">
			<div style={{textAlign: "center"}}>
				<h1>Contact Christian</h1>
				
			</div>
			    <div className="container mt-5">
    
      <form style={{textAlign:"center", display: "flex", flexDirection: "column",alignItems: "center"}}
      		onSubmit={onSubmit}>
        <div className="mb-3">
          <h4 className="form-h4" htmlFor="name">
            Name
          </h4>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <h4 className="form-h4" htmlFor="email">
            Email
          </h4>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <h4 className="form-h4" htmlFor="message">
            Message
          </h4>
          <textarea className="form-control" id="message" required />
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