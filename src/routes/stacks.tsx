import html from '../assets/html.svg'
import css from '../assets/css.svg'
import javascript from '../assets/javascript.svg'
import types from '../assets/types.svg'
import tailwind from '../assets/tailwind.svg'
import react from '../assets/react.svg'
import node from '../assets/node.svg'
import sql from '../assets/sql.svg'
import mongodb from '../assets/mongodb-icon.svg'
import csharp from '../assets/icons8-c-sharp-logo.svg'

import { motion } from 'framer-motion'



export function Stacks() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.5
      }
    }
  };
  return (
  
  <div className=''>
  <div />
        <motion.div 
         variants={container}
         initial="hidden"
         animate="visible"
        className='flex items-center justify-center md:ml-16 lg:max-w-[1500px] text-zinc-400 '>
          <div className="shadow-xl shadow-black h-96  border-zinc-800 justify-center max-w-[800px] mt-24 text-zinc-400  md:p-8 md:rounded-lg  flex flex-col  font-sans  bg-zinc-950/95">
          <div className='flex gap-5 mb-9  p-8'> 
            <div className='min-w-64 '>
              <p className='font-semibold text-4xl'>Habilidades: </p>
              <div>
                <ul className='list-disc pl-9'>
                  <li>Capacidade de criação de aplicações SPA;</li>
                  <li>Capacidade de desenvolver APIs no padrão RESTFull;</li>
                  <li>Habilidades de comunicação;</li>
                  <li>Raciocinio lógico;</li>
                  <li>Habilidade de resolução de problemas;</li>
                  <li>Estudando sobre Desing Patterns;</li>
                  <li>Estudando sobre Arquitetura de software;</li>
                </ul>
                <p className='font-semibold text-4xl'>Idiomas:</p>
                <ul className='list-disc pl-9'>
                  <li>Inglês</li>
                  <li>Espanhol</li>
                </ul>
              </div>
            </div>
                        <div className='flex flex-col  min-w-64'>
                          <p className='font-semibold text-4xl'>Tecnologias:</p>
                        <div className=' grid grid-cols-4  '>
                          <img src={html} className='size-12 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110' title='HTML'/>
                          <img src={css} className='size-12 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110' title='CSS' />
                          <img src={javascript} className='size-12 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110' title='JavaScript'/>
                          <img src={types} className='size-12 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110' title='TypeScript'/>
                          <img src={tailwind} className='size-12 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110' title='Tailwind Css'/>
                          <img src={react} className='size-12 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110' title='React'/>
                          <img src={node} className='size-12 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110' title='Node.JS'/>
                          <img src={sql} className='size-12 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110' title='SQL'/>
                          <img src={mongodb} className='size-12 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110' title='SQL'/>
                          <img src={csharp} className='size-12 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110' title='SQL'/>
                        </div>
                      </div>
          </div>   
      </div>
      
          </motion.div>
        </div>      

  )
}



