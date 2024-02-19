import logo from '../assets/perfil.png'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { Phone } from 'lucide-react'
import { Github } from 'lucide-react'
import { LinkedinIcon } from 'lucide-react'
import { ArchiveRestore } from 'lucide-react'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import javascript from '../assets/javascript.svg'
import types from '../assets/types.svg'
import tailwind from '../assets/tailwind.svg'
import react from '../assets/react.svg'
import python from '../assets/python.svg'
import node from '../assets/node.svg'

export function Card() {
  return( 
    <Dialog.Root>
      <Dialog.Trigger className="cursor-pointer w-96 bg-slate-800 flex justify-items-center place-items-center m-auto mt-8 rounded-md text-slate-300 hover:ring-2">
      <img src={logo} className="rounded-full bg-cover bg-center size-24 justify-items-center place-items-center m-4" />
      <div className="text-slate-400 text-sm max-w-64 text-left">
        <p> <span className='text-slate-300 font-bold'>Name:</span> Kayo Vinicius</p>
        <p ><span className='text-slate-300 font-bold'>Age: </span> 18</p>
        <p><span className='text-slate-300 font-bold'>Tecnologias: </span>JavaScrpit | TypeScript | React | Tailwind ...</p>
      </div> 
      </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='inset-0 fixed bg-black/60'>
            <Dialog.Content className='z-10 fixed left-1/2 top-1/2 overflow-hidden -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full max-h-[80vh] bg-slate-900 rounded-md flex flex-col outline-none'>
              <Dialog.Close className='absolute top-0 right-0 hover:bg-slate-800 hover:text-slate-300 p-1.5 text-slate-400 rounded-full '>
                <X className='size-5'/>
              </Dialog.Close>
              <div className='flex justify-items-center place-items-center gap-7 bg-slate-800'>
                  <div className='flex flex-col items-center'>
                    <img src={logo} className="rounded-full bg-cover bg-center size-40 justify-items-center place-items-center m-4" />
                    <p className='text-slate-500 mb-2'>Dev front-end</p>
                  </div> 
                <div className='text-slate-400 max-w-96'>
                  <p></p>
                </div>   
              </div>

              <div className='flex mt-4 gap-5'>
                <div className='bg-slate-800 w-52 h-96 rounded-md text-center  text-slate-50'>
                  <p className='text-sm w-full mb-3 mt-4'>Redes sociais:</p>
                  <div className='flex flex-col items-center'>
                    <a href="https://api.whatsapp.com/send?phone=5511964443582" 
                    target='_blank'
                    className='border border-green-600 flex w-28 rounded-md p-2 gap-1 mb-3 hover:bg-green-600 text-sm'>
                     <Phone className='size-4'/> Whatsapp
                    </a>
                    <a href="https://www.linkedin.com/in/kayo-vinicius-a149ba260/"
                    target='_blank'
                    className='border border-blue-600 flex w-28 rounded-md p-2 gap-1 mb-3 hover:bg-blue-600 text-sm'>
                     <LinkedinIcon className='size-4'/> Linkedin
                      </a>
                    <a href="https://github.com/DevKayoS"
                    target='_blank'
                    className='border border-purple-600 flex max-w-28 w-28 rounded-md p-2 gap-1 mb-3 hover:bg-purple-600 text-sm'
                    >
                     <Github className='size-4'/> Github
                      </a>
                  </div>
                  <div className='flex items-center flex-col mb-3'>
                    <p className='text-sm mb-3'>Baixar:</p>
                    <a href="../assets/curriculum.pdf"
                     target='_blank'
                    className='border border-slate-600 flex max-w-28 w-28 rounded-md p-2 gap-1 mb-3 hover:bg-slate-600 text-sm'
                    >
                     <ArchiveRestore className='size-4'/>Curriculo
                      </a>
                  </div>

                </div>
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

                    <div className='h-px bg-slate-700'/>
                    <div className='text-slate-400 flex flex-col m-4'>
                      <p className='font-bold text-slate-50'>Educação:</p>
                      <p > <span className='text-slate-50'> Ensino Superior:</span>  UFABC cursando Bacharelado em Ciências e suas tecnologias</p>
                      <p> <span className='text-slate-50'>Ensino Médio:</span> Etec com o curso Desenvolvimento de sistemas  </p>
                    </div>
                    
                </div>
                
              </div>
               

              </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal>
    </Dialog.Root>
  )
}
