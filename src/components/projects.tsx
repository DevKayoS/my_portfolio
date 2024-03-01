import clima from "../assets/condicoes_climaticas.png"
import rest from "../assets/api_rest.png"
import {motion} from "framer-motion"
import { ArrowRight } from "lucide-react";


export function Projects(){
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
    <div>
      <div className="lg:h-px  bg-zinc-800"/>
      <div id='projects'  className='projetos flex flex-col lg:w-full items-center h-[200vh] w-[80vh] mb-[400px] lg:mb-0 text-slate-50'>
        
        <div className="mt-28">
          <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"

          >
            <h1  className=" font-bold text-4xl hover:text-purple-600 ">Projetos</h1>
            <div className="h-2 rounded-full   w-80 bg-purple-600 mb-8 mt-3"/>
          </motion.div>
          <div className=" flex flex-col space-y-14 text-slate-300">
            <div id="projeto-1" className="flex flex-col lg:flex-row lg:w-[900px] w-[500px] max-w-[1500px] gap-10 bg-zinc-900/40 p-10 rounded-md shadow-md shadow-purple-400 0"> 
              <a href="https://condicoes-climaticas.vercel.app" target="_blank" className="w-96 bg-zinc-600/30 shadow-lg shadow-purple-600 hover:shadow-sky-500 rounded-md h-96 overflow-hidden">
                  <img src={clima} className="w-full" />
                  <p className="m-3 font-bold">Condições Climáticas</p>
                  <p className="m-3 text-sm text-zinc-400">Aplicação web feita para intuito de estudos, na qual foi utilizado React com TypeScript e para estilização tailwindCSS. <span className="font-bold hover:underline text-slate-100">Clique para acessar </span></p>
                
              </a>
              <div className="size-96 space-y-5">
                <p>Esse é uma aplicação web relativamente simples, porém eu aprendi diversas coisas fazendo esse projeto. Como por exemplo, nessa aplicação foi necessário utilizar uma API de clima para puxar os dados das condições climáticas, então utilizando as próprias ferramentas do React fiz as requisições. Além disso, a aplicação demonstra a previsão do tempo nas próximas horas.</p>
                <p>Para acessar o código <a className="text-purple-500 font-bold hover:underline" target="_blank" href="https://github.com/DevKayoS/condicoes_climaticas"> clique aqui</a>!!</p>
              </div>

            </div>

            <div id="projeto-2" className="flex flex-col lg:flex-row lg:w-[900px] w-[500px] max-w-[1500px] gap-10 bg-zinc-900/40 p-10  rounded-md shadow-md shadow-purple-400  "> 
              <div className="size-96 space-y-5">
                <p>Esse é um projeto de API, feito para o intuito de estudos. Esse projeto é uma API RESTFull de um católogo de Cinema feita com o TypeScript e com o framework Express, além disso, foi usado o Atlas do MongoDB, um banco de dados online para salvar os dados. Com ele é capaz de fazer tudo que um CRUD pode fazer, podemos criar um novo filme para o católogo, assim como podemos ler a informação, atualizar ela e deletar.  </p>
                <p >Para acessar o código <a className="text-purple-500 font-bold hover:underline" target="_blank" href="https://github.com/DevKayoS/api_restfull_com_ts"> clique aqui</a>!!</p>
              </div>
              <a href="https://github.com/DevKayoS/api_restfull_com_ts" target="_blank" className="w-96 bg-zinc-600/30 shadow-lg shadow-purple-600 hover:shadow-sky-500 rounded-md h-96 overflow-hidden">
                  <img src={rest}  />
                  <p className="m-3 font-bold">API RESTFull com Express + TS</p>
                  <p className="m-3 text-sm text-zinc-400">API RESTFull feita com o framework Express, com o winston e com TypeScript <span className="font-bold hover:underline text-slate-100">Clique para acessar </span></p>
                
              </a>

            </div>

          </div>
            <div className="text-slate-50 flex items-center justify-center flex-row text-xl mt-20">
              <p>Para acessar o meu repositório no GitHub <a href="https://github.com/DevKayoS" target="_blank" className="text-purple-500 font-bold hover:underline flex "> clique aqui <ArrowRight/></a> </p>
            </div>

        </div>
      </div>

     
    </div>
  )
}