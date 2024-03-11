import perfil from '../assets/perfil.png'

export function Header(){
  return(
    <div className="w-full  bg-zinc-800 h-16  md:justify-between md:space-x-[1200px]  flex fixed  space-x-16">
      
      <div className='ml-2 flex-row gap-2   flex '>
        <img src={perfil} className="rounded-md mt-3  size-10" />
        <div className='flex items-center justify-center'>
          <p className='text-xs md:text-sm lg:text-sm hover:text-zinc-300 hover:underline text-zinc-500'>kayoribeirodev@gmail.com</p>
        </div>
      </div>
      <div className='flex md:justify-end lg:justify-end text-zinc-500  text-xs md:text-sm lg:text-sm items-center '>
        <a href="#main" className='hover:text-zinc-300  hover:bg-slate-500/10 rounded-md p-2'>Home</a>
        <a href="#stacks" className='hover:text-zinc-300 hover:bg-slate-500/10 rounded-md p-2'>Skills</a>
        <a href="#projects" className='hover:text-zinc-300 hover:bg-slate-500/10 rounded-md p-2'>Projetos</a>
        <a href="#about" className='hover:text-zinc-300 hover:bg-slate-500/10 rounded-md p-2'>About</a>
      </div>
    </div>
  )
}