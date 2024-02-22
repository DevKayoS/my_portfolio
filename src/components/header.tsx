import logo from '../assets/perfil.png'

export function Header(){
  return(
    <div className="w-full bg-zinc-800 h-16  flex fixed m-0">
      <div className='w-24 flex-row gap-2 flex justify-center'>
        <img src={logo} className="rounded-md mt-3  size-10" />
      </div>
      <div className='flex w-full justify-end text-zinc-500 gap-3 text-sm items-center mr-4'>
        <a href="/main.tsx" className='hover:text-zinc-300 hover:underline'>Home</a>
        <a href="" className='hover:text-zinc-300 hover:underline'>Skills</a>
        <a href="" className='hover:text-zinc-300 hover:underline'>Projetos</a>
        <a href="" className='hover:text-zinc-300 hover:underline'>About</a>
      </div>
    </div>
  )
}