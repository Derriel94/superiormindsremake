import {useState} from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const Bio = ({}: RouterProps) => {

	return (
		<div style={{textAlign: "left", margin: "0 10%"}} className="Bio">
				<h1 style={{textAlign: "center"}}>Bio</h1>
        <p>Hey guys! My name is <span style={{fontSize: "1rem"}}>Christian McBride</span> known as MadMac. 
          I have been in the voiceover industry for 3 going on 4 years. 
          I have narrated and produced over 30 audiobooks. 
          I have done documentaries, podcasts, youtube channels, 
          and online ads for small and major companies. 
          I have voiced in Animation work, and telephone IVR. 
          Even done commercials movie trailers and promotional videos as well.  
          I've worked with a ton of indie companies and some ones you may recognize such as eBay, Nike, Google, and The NBA.</p>
				
          <p>My versatility with my voice is what makes me most unique, 
          I am a singer-songwriter. 
          I am a poet lyricists a rapper I can sing I can turn into your favorite 
          monster or narrate your true crime documentary. 
          I love every category I get to work in, I got my start in audiobooks. 
          I still do them but not as much since I have been exploring the wonderful world of voiceover. 
          I have met some amazing and notable producers and writers and videographers in my journey this business keeps a smile on my face.  
          I challenge myself daily with being the best voice artist I can possibly and I am absolutely passionate about what I do.</p>
        <p>
          I've narrated and produced over 25 audiobooks, 
          I have narrated documentaries countless online ads, 
          and promos for business use. 
          E-Learning for companies such as eBay even a mock ad for Nike. 
          I have starred as a main character in multiple web series and even video game work. 
          I'm also a singer-songwriter with over 100 songs under my belt.
          </p>
          <p>
          I have skills in writing such as screenwriting narration writing, 
          comic writing, and novel writing. 
          I write poetry and I am a singer-songwriter as well. 
          I also have some experience in audio engineering( post-production as well).
				</p>
      </div>
		);
};

export default Bio;