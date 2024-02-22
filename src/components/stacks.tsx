import html from '../assets/html.svg'
import css from '../assets/css.svg'
import javascript from '../assets/javascript.svg'
import types from '../assets/types.svg'
import tailwind from '../assets/tailwind.svg'
import react from '../assets/react.svg'
import python from '../assets/python.svg'
import node from '../assets/node.svg'

export function Stacks() {
  return (
    <div className='bg-slate-800 w-full rounded-md text-slate-50'>
                    <p className=' m-4 text-sm '>Tecnologias: <span className='cursor-pointer' title='nivel: básico - médio'> ⭐⭐⭐</span></p>
                    <div className='gap-3 m-4 h-28 justify-center cursor-pointer grid grid-cols-5'>
                        <img src={html} title='HTML'/>
                        <img src={css} title='CSS' />
                        <img src={javascript} title='JavaScript'/>
                        <img src={types} title='TypeScript'/>
                        <img src={tailwind} title='Tailwind Css'/>
                        <img src={react} title='React'/>
                        <img src={python} title='Python' />
                        <img src={node} alt="Node.JS" />
                    </div>
    </div>
  )
}