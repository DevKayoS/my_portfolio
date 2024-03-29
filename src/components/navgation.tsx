import { Home, Laptop2, FolderGit2, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

export function Navgation() {
  return(
    <div className="md:w-96 m-auto md:flex md:items-center md:justify-center ">
    <div className="text-slate-50 flex items-center shadow-lg shadow-purple-800 justify-center bg-zinc-950/95 w-80 p-4 gap-9 rounded-full">
      <Link title="home" className=" rounded-full p-2 hover:bg-zinc-600  " to={"/"}><Home/></Link>
      <Link title="Tecnologias e habilidades" className=" rounded-full p-2 hover:bg-zinc-600  " to={"/tecnologies"}><Laptop2/></Link>
      <Link title="Projetos" className=" rounded-full p-2 hover:bg-zinc-600  " to={"/projects"}><FolderGit2/></Link>
      <Link title="sobre" className=" rounded-full p-2 hover:bg-zinc-600  " to={"/about"}><UserRound/></Link>
    </div>

  </div>
  )
}