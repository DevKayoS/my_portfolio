import { Phone, Github, LinkedinIcon, Mail } from 'lucide-react'




export function SocialMidia() {
 
  return  ( 

    <div className='flex mt-44 gap-5 fixed'>
      <div className='bg-zinc-950/85 shadow-md shadow-black w-14 rounded-r-md text-center max-h-48 text-slate-50'>
        <div className='flex flex-col items-center'>
          <a href="https://api.whatsapp.com/send?phone=5511964443582" 
          target='_blank'
          className='border border-green-600 flex mt-2 rounded-md p-2 gap-1 mb-3 hover:bg-green-600 text-sm'>
          <Phone className='size-4'/>
          </a>
          <a href="https://www.linkedin.com/in/kayo-vinicius-a149ba260/"
          target='_blank'
          className='border border-blue-600 flex  rounded-md p-2 gap-1 mb-3 hover:bg-blue-600 text-sm'>
          <LinkedinIcon className='size-4'/> 
            </a>
          <a href="https://github.com/DevKayoS"
          target='_blank'
          className='border border-purple-600 flex  rounded-md p-2 gap-1 mb-3 hover:bg-purple-600 text-sm'
          >
          <Github className='size-4'/> 
            </a>
            <a href="mailto:kayoribeirodev@gmail.com?subject=Vim pelo portifolio&body=Corpo da mensagem"
          target='_blank'
          className='border border-zinc-600 flex  rounded-md p-2 gap-1 mb-3 hover:bg-zinc-600 text-sm'
          >
          <Mail className='size-4'/> 
            </a>

        </div>
    </div>
</div>
  )
}