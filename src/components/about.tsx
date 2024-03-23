import {motion} from "framer-motion"
import perfil from '../assets/perfil.png'
import { Phone } from 'lucide-react'
import { Github } from 'lucide-react'
import { LinkedinIcon } from 'lucide-react'
import { Navgation } from "./navgation"

export function About() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };


  return (
    <div id='about' className="text-slate-50 max-w-[200vh] h-[200vh] mt-96 lg:h-[100vh] ">
     <div className="lg:h-px  bg-zinc-800"/>
     
    <div   className='ml-44  lg:ml-0 flex flex-col justify-center items-center text-slate-50'>
      
    <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
          className="lg:mt-36 lg:items-start flex flex-col items-center   w-[780px]"
          >
            <h1  className=" font-bold text-4xl w-96  hover:text-purple-600 ">Sobre Mim:</h1>
            <div className="h-2 rounded-full   w-96 bg-purple-600 mb-8 mt-3"/>
          </motion.div>
      <div className="flex flex-col max-w-[1200px] w-[400px] lg:w-[800px]  lg:flex-row  gap-10 bg-zinc-700/40 p-10 rounded-md shadow-lg shadow-purple-800">
        <div className="space-y-2 text-sm">
            <img src={perfil} className="size-32 rounded-full" />
            <p><span className="font-bold">Nome: </span>Kayo Vinicius Ribeiro da Silva</p>
            <p><span className="font-bold">Idade: </span>18 anos</p>
            <p><span className="font-bold">Faculdade: </span> UFABC</p>
            <p><span className="font-bold">Idiomas: </span> Ingles (intermediário)</p>

        </div>
        <div className="w-px h-auto bg-zinc-700"/>
        <div className="max-w-96">
          <p>Sou Kayo, um desenvolvedor front-end apaixonado por criar experiências digitais cativantes e funcionais. Com habilidades sólidas em HTML, CSS e JavaScript, e experiência na biblioteca muito conhecida React, estou comprometido em produzir código limpo e eficiente. Valorizo a colaboração, o aprendizado contínuo e a busca por soluções inovadoras. Estou pronto para contribuir e ajudar a transformar ideias em realidade em projetos incríveis.</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center ">
        <p className="w-56 flex items-center justify-center">Entre em contato comigo: </p>
        <div className="flex gap-7 items-center justify-center">
          <a href="https://api.whatsapp.com/send?phone=5511964443582" 
            target='_blank'
            className=' flex mt-2 rounded-full hover:bg-zinc-800/60 hover:shadow-sm hover:shadow-purple-700 p-2 gap-1 mb-3  text-sm'>
            <Phone className='size-6'/>
            </a>
            <a href="https://www.linkedin.com/in/kayo-vinicius-a149ba260/"
            target='_blank'
            className=' flex rounded-full hover:bg-zinc-800/60 hover:shadow-sm hover:shadow-purple-700  p-2 gap-1 mb-3 hover: text-sm'>
            <LinkedinIcon className='size-6'/> 
              </a>
            <a href="https://github.com/DevKayoS"
            target='_blank'
            className=' flex  rounded-full hover:bg-zinc-800/60 hover:shadow-sm hover:shadow-purple-700 d p-2 gap-1 mb-3 hover: '
            >
            <Github className='size-6'/> 
              </a>
        </div>
       
      </div>
    </div>
  </div>
  )
}