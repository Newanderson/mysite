import "./Cards.css"
import React from "react";
import {motion} from "framer-motion"

//icons
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

//imagens
import New from "../../img-cards/new.JPG"
import Ativos from "../../img-cards/ativos.JPG"
import Dashboard from "../../img-cards/dash.JPG"
import Call from "../../img-cards/call.JPG"
import ToDo from "../../img-cards/toDo.JPG"
import Login from "../../img-cards/login.JPG"


const Cards = () =>{
    return(
        
<main>
    <motion.div
     initial={{ y:-100, opacity:0}}
     whileInView={{ y:0, opacity:1 }}
     transition={{delay:0.3, y:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}}
     className="my-pro">
        <h1>my <span className="my"> projects </span></h1>

    </motion.div>


<section className="secao-cards">


      
    <motion.article
        
          // NEW

            initial={{ y:-100, opacity:0}}
            whileInView={{ y:0, opacity:1 }}
            transition={{delay:0.3, y:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}}
            
            className="cards">

            <img width={350} src={New} alt="ativos" />

            <div style={{width:"350px"}} className="box">
             <h1 className="title"> My portfolio</h1>
             <p className="grafo">Desenvolvido com muitas criatividade e planejamento , meu portifólio foi criado como um desafio partículas de aperfeiçoar minhas habilidades e novos recursos para uma aplicação responsiva .  </p>


             <div className="cards-icons">
             
             
                <a href="https://github.com/Newanderson/mysite"> <FaGithub /></a>
                <a href="https://newsouza.netlify.app/"><FaLink /></a>
               

              
             
            </div>
               
        </div>

    </motion.article>

    <motion.article

            //ATIVOS
    
            initial={{ y:-100, opacity:0}}
            whileInView={{ y:0, opacity:1 }}
            transition={{delay:0.3, y:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}}
            
            className="cards">

            <img width={350} src={Ativos} alt="NEW" />

        <div style={{width:"350px"}} className="box">
             <h1 className="title">Ativos digitais</h1>
             <p className="grafo">Projeto ativos como forma de gratificação pela  parceria que durou anos, que me proporcionou o crescimento pessoal e profissional , projeto ReactJs e Tailwind Css .  </p>


             <div className="cards-icons">
             
             
                <a href="https://github.com/Newanderson/ativosdigitais"> <FaGithub /></a>
                <a href="https://ativosdigitais-dev.netlify.app/"><FaLink /></a>
               

              
             
            </div>
               
        </div>

    </motion.article>

    <motion.article
    
            //DAHSBOARD

            initial={{ y:-100, opacity:0}}
            whileInView={{ y:0, opacity:1 }}
            transition={{delay:0.3, y:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}}
            
            className="cards">

            <img width={350} src={Dashboard} alt="Dashboard" />

        <div style={{width:"350px"}} className="box">
             <h1 className="title">ION. vendas </h1>
             <p className="grafo">Painel de controle desenvolvido com Reactjs , otimizar de forma fácil e fluida tudo que usuário necessita em plataforma de vendas , pensada unicamente na experiência dos usuários.  </p>


             <div className="cards-icons">
             
             
                <a href="https://github.com/Newanderson/dashboard"> <FaGithub /></a>
                <a href="https://ionvendas.netlify.app/"><FaLink /></a>
               

              
             
            </div>
               
        </div>

    </motion.article>

    <motion.article
    
            //CHAMADOS

            initial={{ y:-100, opacity:0}}
            whileInView={{ y:0, opacity:1 }}
            transition={{delay:0.3, y:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}}
            
            className="cards">

            <img width={350} src={Call} alt="call" />

        <div style={{width:"350px"}} className="box">
             <h1 className="title">Projeto Chamados</h1>
             <p className="grafo">Possue cadastro de novo usuário, cadastro de novos clientes e abertura de chamados com espaços para adicionar informações para cada cliente ,Firebase para 
            Autenticação e armazenamento de dados .  </p>


             <div className="cards-icons">
             
             
                <a href= "https://github.com/Newanderson/projeto-chamadas"><FaGithub /></a>
                <a href="https://cnpj-calls-project.netlify.app/"><FaLink /></a>
               

              
             
            </div>
               
        </div>

    </motion.article>

    <motion.article
    
            //LISTA TAREFAS

            initial={{ y:-100, opacity:0}}
            whileInView={{ y:0, opacity:1 }}
            transition={{delay:0.3, y:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}}
            
            className="cards">

            <img width={350} src={ToDo} alt="todo" />

        <div style={{width:"350px"}} className="box">
             <h1 className="title">Lista de tarefas</h1>
             <p className="grafo"> As tarefas que podem ser editadas e excluídas,
                 mudar o status para concluída ,Firebase e seu ecossistema para 
            Autenticação , cadastro de usuário e  armazenamento de dados .  </p>


             <div className="cards-icons">
             
             
                <a href="https://github.com/Newanderson/task-list"> <FaGithub /></a>
                <a href="https://todolistlol.netlify.app/"><FaLink /></a>
               

              
             
            </div>
               
        </div>

    </motion.article>

    <motion.article
    
            //LOGIN

            initial={{ y:-100, opacity:0}}
            whileInView={{ y:0, opacity:1 }}
            transition={{delay:0.3, y:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}}
            
            className="cards">

            <img width={350} src={Login} alt="login" />

        <div style={{width:"350px"}} className="box">
             <h1 className="title">Projeto login</h1>
             <p className="grafo">Projeto Login desenvolvido apenas em HTML e CSS , desafiou minhas habilidades para uma aplicação mais raiz , procurando de forma desenvolver algo fluido e 100% responsiva .
             </p>


             <div className="cards-icons">
             
             
                <a href="https://github.com/Newanderson/projeto-login"> <FaGithub /></a>
                <a href="https://login-io.netlify.app/"><FaLink /></a>
               

              
             
            </div>
               
        </div>

    </motion.article>
            
            
</section>

</main> 

    )
}


export default Cards;


