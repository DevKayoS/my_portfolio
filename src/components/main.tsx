import { SocialMidia } from "./socialMidias";
import {motion} from "framer-motion"
import { UserRound, Laptop2, FolderGit2, Home} from "lucide-react"
import { Navgation } from "./navgation";

export function Main() {
  return( 
   <div id="main" className="flex flex-col lg:h-[110vh] h-[80vh] bg-zinc-950 ">
      <SocialMidia/>
      <div className="lg:max-w-[1200px] md:m-28">
      <motion.div className=" border-white justify-center w-full text-zinc-400  md:p-8 md:rounded-lg  flex flex-col md:ml-32 md:mt-1 md:w-[1200px]  mt-56 ml-16 font-sans ">
        <h1 className="text-zinc-400 md:text-4xl text-2xl  hover:text-zinc-200">Olá, me chamo Kayo 🧑🏽‍💻!</h1>
        <p className="md:text-8xl text-2xl font-bold text-purple-700 "> Sou um Desenvolvedor Web</p>
        <p className="md:text-4xl text-2xl w-[700px] hover:text-zinc-200">Seja muito bem-vindo ao meu portifolio!!</p>
        <div className="h-2 rounded-full w-96 bg-purple-600 mt-3"/>
        
      </motion.div>
      </div>
      <Navgation/>
      
   </div>
      
                    
             
  )
}

