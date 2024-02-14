import logo from '../assets/perfil.png'

export function Card() {
  return( 
    <div className="w-96 bg-slate-800 flex justify-items-center place-items-center m-auto mt-8 rounded-md text-slate-300 hover:ring-2">
     <img src={logo} className="rounded-full bg-cover bg-center size-24 justify-items-center place-items-center m-4" />
     <div className="text-slate-400 text-sm max-w-64">
      <p> <span className='text-slate-300 font-bold'>Name:</span> Kayo Vinicius</p>
      <p ><span className='text-slate-300 font-bold'>Age: </span> 18</p>
      <p><span className='text-slate-300 font-bold'>Tecnologias: </span>JavaScrpit | TypeScript | React | Tailwind</p>
     </div> 
    </div>
    
  )
}
