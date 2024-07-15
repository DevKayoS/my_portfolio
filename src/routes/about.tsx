import {motion} from "framer-motion"



export function About() {
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
    <div id='about' className="text-slate-50  ">
     <div className="lg:h-px  bg-zinc-800"/>
     
    <div   className='ml-44  lg:ml-0 flex flex-col justify-center items-center mt-28 text-slate-50'>
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="visible"
      className="flex flex-col max-w-[1200px] w-[400px] lg:w-[800px]  lg:flex-row  gap-10 bg-zinc-950/95 p-10 rounded-md shadow-xl shadow-black">
        <div className="space-y-2 text-sm">
            <img src="https://github.com/DevKayoS.png" className="size-32 rounded-full" />
            <p><span className="font-bold">Nome: </span>Kayo Vinicius Ribeiro da Silva</p>
            <p><span className="font-bold">Idade: </span>19 anos</p>
            <p><span className="font-bold">Faculdade: </span> UFABC</p>
            <p><span className="font-bold">Idiomas: </span> Ingles (intermediário)</p>

        </div>
        <div className="w-px h-auto bg-zinc-700"/>
        <div className="max-w-96">
          <p>Sou Kayo, um desenvolvedor front-end apaixonado por criar experiências digitais cativantes e funcionais. Com habilidades sólidas em HTML, CSS e JavaScript, e experiência na biblioteca muito conhecida React, estou comprometido em produzir código limpo e eficiente. Valorizo a colaboração, o aprendizado contínuo e a busca por soluções inovadoras. Estou pronto para contribuir e ajudar a transformar ideias em realidade em projetos incríveis.</p>
          {/* <Download file={'../arquivo/curriculo.pdf'}> Baixar curriculo </Download> */}
        </div>
      </motion.div>
    </div>
  </div>
  )
}