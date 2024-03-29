import {motion} from "framer-motion"


export function Main() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.4
      }
    }
  };
  return( 
      <div className="lg:max-w-[1200px] m-auto flex items-center justify-center ">
      <motion.div 
      variants={container}
      initial="hidden"
      animate="visible"
      className="shadow-xl shadow-black h-96 mb-10  border-zinc-800 justify-center max-w-[800px] mt-32 text-zinc-400  md:p-8 md:rounded-lg  flex flex-col  font-sans  bg-zinc-950/95">
        <h1 className="text-zinc-400 md:text-4xl text-2xl  hover:text-zinc-200">Olá, me chamo Kayo</h1>
        <p className="md:text-6xl text-2xl font-bold text-purple-700 "> Sou um Desenvolvedor Web</p>
        <p className="md:text-4xl text-2xl w-[700px] hover:text-zinc-200">Seja muito bem-vindo ao meu portifolio!!</p>
        <div className="h-2 rounded-full w-96 bg-purple-600 mt-3"/>
        
      </motion.div>
      </div>
           
  )
}

