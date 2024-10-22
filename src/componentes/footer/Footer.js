import "./Footer.css"
import React from "react";
import {motion} from "framer-motion"

//icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { FaWhatsapp } from "react-icons/fa";

const Footer = () =>{
    return(
    <section className="secao">
       <section className="skill">
             <motion.p 
              initial={{ x:-100, opacity:0}}
              whileInView={{ x:0, opacity:1 }}
              transition={{delay:0.3, x:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}}
             className="dev-p">Developer web</motion.p>
             
            <motion.h1
            initial={{ x:-100, opacity:0}}
            whileInView={{ x:0, opacity:1 }}
            transition={{delay:0.3, x:{type:"spring", stiffness:23},opacity:{duration:1}, ease:"eseaIn", duration:1}}
            >FRONT-
            <span className="end">END</span></motion.h1>

            
            
            <motion.section 
            initial={{ y:-100, opacity:0}}
            whileInView={{ y:0, opacity:1 }}
            transition={{delay:0.3, y:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}}
            
            className="icons-skill">

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" alt="java"/>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" 
                aria-label="html" />
                
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" alt="css"/>

                
               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="react" />

               
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="git"/>
          

               
               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" alt="node" />

               
               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" alt="fire" />

               
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="tail"/>
          
              
              <  img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" alt="word"/>
         
            </motion.section>

            
        
       </section>
            <section className="call">
                    
                    <motion.div
                     initial={{ x:-100, opacity:0}}
                     whileInView={{ x:0, opacity:1 }}
                     transition={{delay:0.3, x:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}} className="contat">
                        <h1>GET IN <span className="touch">TOUCH</span> </h1>
                    </motion.div> 

                    <motion.div 
                    initial={{ y:-100, opacity:0}}
                    whileInView={{ y:0, opacity:1 }}
                    transition={{delay:0.3, y:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}}
                    className="icon-mail">
                    <a href="https://github.com/Newanderson"><FaGithub /></a>

                    <a href="https://www.linkedin.com/in/new-souza-7583a6297/"><FaLinkedin /></a>
                            
                
                    <a href="https://wa.me/5562982562832"><FaWhatsapp /></a>

                    </motion.div>
                    

                </section>
       </section>
       


    )
}


export default Footer;