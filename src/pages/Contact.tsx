import { useState, useRef, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
// import { motion } from "framer-motion";
// import {Link} from "react-router-dom";

const Contact = () => {
	const [formStatus, setFormStatus] = useState('Send')
  const onSubmit = (e :ChangeEvent<HTMLFormControlsCollection>) => {
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
  const [name, setName] = useState<string>('Cool Client or Employer');
	const [email, setEmail] = useState<string>('cool@email.com');
	const [message, setMessage] = useState<string>(`cool web/app/content idea, set your price and we will talk. Potential employer?`);
	const form = useRef<HTMLFormElement>(null);

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    	setName(e.target.value);
  	}
  	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    	setEmail(e.target.value);
  	}
  	const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    	setMessage(e.target.value);
  	}
  		
  	const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
  		e.preventDefault();
 		try {
 				//import.meta.env.
 			const data = await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,form.current!,import.meta.env.VITE_PUB_ID);
 			console.log('Success', data);
 			alert('Your message was sent and I will be in touch shortly')
 			location.reload();
 		} catch (error) {	
 			console.log('error', error);
 		}
 		
  	}
	return (
		<div className="contact">
			<div style={{textAlign: "center"}}>
				<h1>Contact Christian</h1>
			</div>
			<form style={{display: "flex", flexDirection:"column"}}onSubmit={handleSubmit} ref={form} className="contactform">
					<div className="contactname"><div>★</div> Leave A Message <div>★</div></div>
					<input placeholder={name} name="from_name" type="text" id="name" required className="name"onChange={(e)=>handleNameChange(e)}/>
					<input placeholder={email} name="from_email" type="email" id="email" required className="email"onChange={(e)=>handleEmailChange(e)}/>
					<textarea placeholder={message} name="message" id="message" required className="message"onChange={(e)=>handleMessageChange(e)}/>					
					<input type="submit" value={formStatus} className="submit" />
				</form>
      </div>
		);
};

export default Contact;