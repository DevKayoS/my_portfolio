import { SocialMidia } from "./socialMidias";
import desktop from '../assets/desktop.png'
import { ArrowDown } from "lucide-react";

export function Main() {
  return( 
   <div id="main" className="flex flex-col h-[110vh]  bg-zinc-950 ">
      <SocialMidia/>
      <div className=" border-white justify-center text-zinc-400 flex flex-col ml-32 mt-28 font-sans">
        <h1 className="text-zinc-400 text-4xl hover:text-zinc-200">Olá, me chamo Kayo 🧑🏽‍💻!</h1>
        <p className=" text-4xl font-bold text-purple-700 hover:underline"> Sou um Desenvolvedor Front-end</p>
        <p className="text-2xl w-[700px]"> Estudante de programação, com força de vontade para progredir cada vez mais!</p>
        <div className="h-2 rounded-full w-96 bg-purple-600 mt-3"/>
        <div className="flex h-full justify-end">
          <div className="size-96 rounded-full animate-pulse bg-purple-600/10 blur-lg mr-5"/>
        </div>
      </div>
      <div className="items-center flex justify-center">
        <ArrowDown className="text-slate-700 w-8 h-8 animate-bounce rounded-full mt-0 border-2"/>
      </div>
   </div>
      
                    
             
  )
}

