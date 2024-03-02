import { SocialMidia } from "./socialMidias";

export function Main() {
  return( 
   <div id="main" className="flex flex-col lg:h-[110vh] h-[80vh] bg-zinc-950 w-96">
      <SocialMidia/>
      <div className="lg:max-w-[1200px] ">
      <div className=" border-white justify-center w-full text-zinc-400 flex flex-col md:ml-32 md:mt-28 md:w-[1200px]  mt-56 ml-16 font-sans cursor-pointer">
        <h1 className="text-zinc-400 md:text-4xl text-2xl  hover:text-zinc-200">Olá, me chamo Kayo 🧑🏽‍💻!</h1>
        <p className="md:text-4xl text-2xl font-bold text-purple-700 hover:underline"> Sou um Desenvolvedor Front-end</p>
        <p className="md:text-4xl text-2xl w-[700px] hover:text-zinc-200">Seja muito bem-vindo ao meu portifolio!!</p>
        <div className="h-2 rounded-full w-96 bg-purple-600 mt-3"/>
        <div className="flex h-full justify-end">
          <div className="lg:size-96 lg:rounded-full animate-pulse lg:bg-purple-600/10 blur-lg mr-5"/>
        </div>
      </div>a
      </div>
      
   </div>
      
                    
             
  )
}

