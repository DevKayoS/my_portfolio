import {motion} from "framer-motion"
import perfil from '../assets/perfil.png'

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
    <div id='about' className="text-slate-50 max-w-[200vh] h-[200vh]">
     <div className="h-px  bg-zinc-800"/>
     
    <div   className='flex flex-col justify-center items-center text-slate-50'>
      
    <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
          className="mt-36 flex flex-col justify-start items-start text-left"
          >
            <h1  className=" font-bold text-4xl hover:text-purple-600 ">Sobre Mim:</h1>
            <div className="h-2 rounded-full   w-80 bg-purple-600 mb-8 mt-3"/>
          </motion.div>
      <div className="flex  max-w-[1200px]   gap-10 bg-zinc-700/40 p-10 rounded-md shadow-lg shadow-purple-800">
        <div className="space-y-2 text-sm">
            <img src={perfil} className="size-32 rounded-full" />
            <p><span className="font-bold">Nome: </span>Kayo Vinicius Ribeiro da Silva</p>
            <p><span className="font-bold">Idade: </span>18 anos</p>
            <p><span className="font-bold">Faculdade: </span> UFABC</p>
            <p><span className="font-bold">Idiomas: </span> Ingles (intermediário)</p>

        </div>
        <div className="w-px h-auto bg-zinc-700"/>
        <div className="max-w-96">
          <p>Sou Kayo, um desenvolvedor front-end apaixonado por criar experiências digitais cativantes e funcionais. Com habilidades sólidas em HTML, CSS e JavaScript, e experiência em frameworks como React, estou comprometido em produzir código limpo e eficiente. Valorizo a colaboração, o aprendizado contínuo e a busca por soluções inovadoras. Além do desenvolvimento, gosto de explorar trilhas para caminhadas e capturar momentos com minha câmera. Estou pronto para contribuir e ajudar a transformar ideias em realidade em projetos incríveis.</p>
        </div>
      </div>
    </div>
  </div>
  )
}