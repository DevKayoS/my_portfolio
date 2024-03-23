import { Home, Laptop2, FolderGit2, UserRound } from "lucide-react";

export function Navgation() {
  return(
    <div className="md:w-96 m-auto opacity-0 md:opacity-100 md:flex md:items-center md:justify-center ">
    <div className="text-slate-50 flex items-center shadow-lg shadow-purple-800 justify-center bg-zinc-700/40 w-80 p-4 gap-9 rounded-full">
      <a className=" rounded-full p-2 hover:bg-zinc-600  " href="#main"><Home/></a>
      <a className=" rounded-full p-2 hover:bg-zinc-600  " href="#stacks"><Laptop2/></a>
      <a className=" rounded-full p-2 hover:bg-zinc-600  " href="#projects"><FolderGit2/></a>
      <a className=" rounded-full p-2 hover:bg-zinc-600  " href="#about"><UserRound/></a>
    </div>

  </div>
  )
}