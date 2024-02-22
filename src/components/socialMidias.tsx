import { Phone } from 'lucide-react'
import { Github } from 'lucide-react'
import { LinkedinIcon } from 'lucide-react'
import { ArchiveRestore } from 'lucide-react'

export function SocialMidia() {
  return  ( 

    <div className='flex mt-28 gap-5 fixed'>
      <div className='bg-zinc-800 w-14 rounded-md text-center max-h-48 text-slate-50'>
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
        </div>
        <div className='flex items-center flex-col mb-3'>
          <a href="../assets/curriculum.pdf"
          target='_blank'
          className='border border-slate-600 flex  rounded-md p-2 gap-1 mb-3 hover:bg-slate-600 text-sm'
          >
          <ArchiveRestore className='size-4'/>
            </a>
        </div>
    </div>
</div>
  )
}