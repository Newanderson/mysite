import "./Home.css"
import React from "react";
import Profile from "../../img/new.png"
import Profile3 from "../../img/new3.png"

//icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { motion } from "framer-motion"

const Home = () =>{
    return(

        <section className="home">

            
            

            <div className="text">

                    <motion.button
                        initial={{ x:-100, opacity:0}}
                        whileInView={{ x:0, opacity:1 }}
                        transition={{delay:0.3, x:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}}
                        className="welcome">⚡ Welcome
                        </motion.button>

                    <motion.div
                    
                        initial={{ x:-100, opacity:0}}
                        whileInView={{ x:0, opacity:1 }}
                        transition={{delay:0.3, x:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}}
                        className="home-right-pc">

                        <div className="home-left">
                        <motion.img 
                         initial={{ y:100, opacity:0}}
                         animate={{ y:0, opacity:1 }}
                         transition={{delay:0.3, y:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}}
                         className="profile" src={Profile3} alt="perfil"/>
                        
                        </div>

                    </motion.div>
                    
                    <motion.div className="start"
                        initial={{ x:-100, opacity:0}}
                        whileInView={{ x:0, opacity:1 }}
                        transition={{delay:0.3, x:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}}
                        >
                        <h1 className="hello">Hello, I'm</h1>
                        <motion.h2
                          initial={{ x:-100, opacity:0}}
                          whileInView={{ x:0, opacity:1 }}
                          transition={{delay:0.3, x:{type:"spring", stiffness:23},opacity:{duration:1}, ease:"eseaIn", duration:1}}
                        className="hello2"> Newanderson</motion.h2>
                        <p className="dev"> Developer web Front-End </p>

                        <p className="lorem"> Me destaco por combinação de inteligência e foco , somados a uma intuição apurada e criativa . Atualmente estudante de Front End !</p>
                        </motion.div>    

                    <motion.div 
                        initial={{ y:10, opacity:0}}
                        whileInView={{ y:0, opacity:1 }}
                        transition={{delay:0.3, y:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}}
                        className="icons"> 

                        <div><a href="https://github.com/Newanderson"><FaGithub /></a></div>
                        <div><a href="https://www.linkedin.com/in/new-souza-7583a6297/"><FaLinkedin /></a></div>
                    
                        <div><a href="https://www.instagram.com/newsouz/"><AiFillInstagram /></a></div>
                    </motion.div>
             </div>

             

            <div 
               
                className="home-right">

               <motion.div 
                initial={{ x:100, opacity:0}}
                whileInView={{ x:0, opacity:1 }}
                transition={{delay:0.3, x:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}}
                className="home-left">

                <img className="profile" src={Profile} alt="perfil"/>
                   
               </motion.div>   
           </div>

        </section>
    )
}


export default Home;

