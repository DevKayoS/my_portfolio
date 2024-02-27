import logo from '../assets/perfil.png'

export function Header(){
  return(
    <div className="w-full bg-zinc-800 h-16  flex fixed m-0">
      <div className='w-72 ml-2 flex-row gap-2 flex justify-center'>
        <img src={logo} className="rounded-md mt-3  size-10" />
        <div className='flex items-center justify-center'>
          <p className='text-sm hover:text-zinc-300 hover:underline text-zinc-500'>kayoribeirodev@gmail.com</p>
        </div>
      </div>
      <div className='flex w-full justify-end text-zinc-500 gap-3 text-sm items-center mr-4'>
        <a href="#main" className='hover:text-zinc-300  hover:bg-slate-500/10 rounded-md p-2'>Home</a>
        <a href="#stacks" className='hover:text-zinc-300 hover:bg-slate-500/10 rounded-md p-2'>Skills</a>
        <a href="#projects" className='hover:text-zinc-300 hover:bg-slate-500/10 rounded-md p-2'>Projetos</a>
        <a href="" className='hover:text-zinc-300 hover:bg-slate-500/10 rounded-md p-2'>About</a>
      </div>
    </div>
  )
}