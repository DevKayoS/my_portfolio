import html from '../assets/html.svg'
import css from '../assets/css.svg'
import javascript from '../assets/javascript.svg'
import types from '../assets/types.svg'
import tailwind from '../assets/tailwind.svg'
import react from '../assets/react.svg'


export function Stacks() {
  return (
  
  <div >


  <div className="lg:h-px bg-zinc-800"/>
    <div id='stacks' className=' flex flex-col h-[100vh]  text-slate-50'>
        <div className='flex flex-col justify-start'>
          <h1 className='ml-16 mt-28 md:ml-32  font-bold text-3xl hover:text-purple-600'>Tecnologias  </h1>
          <div className="h-2 rounded-full ml-16 md:ml-32  w-96 bg-purple-600 mb-8 mt-3"/>
        </div>
        <div>

        
        <div className='lg:grid lg:grid-cols-2 gap-52 md:max-w-[1500px] md:ml-16 lg:max-w-[1500px] '>
          <div className=' flex gap-3 lg:w-[600px] w-96 p-4 justify-center rounded-md shadow-lg shadow-purple-600  ml-16  items-center  bg-zinc-500/30'>
          <div >  
          <p className='text-zinc-400 text-lg hover:text-zinc-300 cursor-pointer'>"Iniciei meus estudos na área em 2020, porém me aprofundei mais há um ano nessas tecnologias e posso perceber um progresso significativo em minha jornada. Cada novo conhecimento adquirido revela a vastidão do campo em que estou imerso e a complexidade que o envolve. Quanto mais me aprofundo, mais claramente percebo o quanto ainda há por descobrir. Este constante desafio me motiva a continuar aprendendo e aprimorando minhas habilidades."</p>
          </div> 
        
      </div>
      <div className=' flex gap-3 mt-10 ml-16 w-96 p-4 justify-center rounded-md shadow-lg shadow-purple-600 flex-col  items-center cursor-pointer bg-zinc-500/30'>
      <div >
        <p className='text-zinc-400 hover:text-zinc-300'>Tecnologias que tenho conhecimentos: </p>
      </div>
          <div className='h-px bg-zinc-300 w-full'/>

                      <div className=' grid grid-cols-5  '>
                          <img src={html} className='size-16 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110' title='HTML'/>
                          <img src={css} className='size-16 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110' title='CSS' />
                          <img src={javascript} className='size-16 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110' title='JavaScript'/>
                          <img src={types} className='size-16 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110' title='TypeScript'/>
                          <img src={tailwind} className='size-16 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110' title='Tailwind Css'/>
                          <img src={react} className='size-16 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110' title='React'/>
                      </div>

    </div>
      </div>
    </div>
       

      
      
    </div>
    </div>
  )
}



