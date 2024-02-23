import html from '../assets/html.svg'
import css from '../assets/css.svg'
import javascript from '../assets/javascript.svg'
import types from '../assets/types.svg'
import tailwind from '../assets/tailwind.svg'
import react from '../assets/react.svg'

export function Stacks() {
  return (
    <div id='stacks' className=' flex flex-col h-[100vh]  text-slate-50'>
      <div>
        <h1 className='ml-32 mt-28  font-bold text-4xl'>Tecnologias 🤖 </h1>
        <div className="h-3 rounded-full ml-32 w-96 bg-purple-600 mb-8 mt-3"/>
      </div>
      <div className=' flex gap-3 w-[700px] justify-center rounded-md h-44 ml-32 items-center bg-zinc-800'>
        <div className='w-96'>
        
        <p className='p-2 '>Venho estudando todas essas tecnologias já irá fazer 1 ano, sinto que estou ficando melhor, mas quanto mais aprendo mais eu vejo o quanto ainda falta para aprender</p>

        </div>

        <div className='w-px bg-zinc-300 h-full'/>
        
        
        <div className='rounded-md text-slate-50 ml-32 mt-28 font-sans'>
                    <div className=' m-4 h-28 justify-center cursor-pointer flex '>
                        <img src={html} className='size-10' title='HTML'/>
                        <img src={css} className='size-10' title='CSS' />
                        <img src={javascript} className='size-10' title='JavaScript'/>
                        <img src={types} className='size-10' title='TypeScript'/>
                        <img src={tailwind} className='size-10' title='Tailwind Css'/>
                        <img src={react} className='size-10' title='React'/>
                    </div>

      </div>
    </div>
    </div>
  )
}



