import { SocialMidia } from "./socialMidias";

export function Main() {
  return( 
   <div id="main" className="flex flex-col h-[110vh]  bg-zinc-950 ">
      <SocialMidia/>
      <div className="max-w-[1200px]">
      <div className=" border-white justify-center  text-zinc-400 flex flex-col ml-32 mt-28 font-sans cursor-pointer">
        <h1 className="text-zinc-400 text-4xl hover:text-zinc-200">Olá, me chamo Kayo 🧑🏽‍💻!</h1>
        <p className=" text-4xl font-bold text-purple-700 hover:underline"> Sou um Desenvolvedor Front-end</p>
        <p className="text-2xl w-[700px] hover:text-zinc-200">Seja muito bem-vindo ao meu portifolio!!</p>
        <div className="h-2 rounded-full w-96 bg-purple-600 mt-3"/>
        <div className="flex h-full justify-end">
          <div className="size-96 rounded-full animate-pulse bg-purple-600/10 blur-lg mr-5"/>
        </div>
      </div>
      </div>
      
   </div>
      
                    
             
  )
}

