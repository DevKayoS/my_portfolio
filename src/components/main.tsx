import { SocialMidia } from "./socialMidias";
import estilo from '../assets/estilo.png'

export function Main() {
  return( 
   <div className=" flex h-[200vh]">
      <SocialMidia/>
      <div className="size-[900px] border-white  text-zinc-400 flex flex-col m-40 font-mono">
        <h1 className="text-zinc-400 text-5xl hover:text-zinc-200">OLÁ, ME CHAMO KAYO VINICIUS</h1>
        <h3></h3>
        <p className="mt-4 text-3xl hover:text-zinc-200"> seja muito bem vindo : )</p>
      </div>
        
          <img src={estilo} className="size-96 translate-x-12 " />
   </div>
      
                    
               
  )
}

