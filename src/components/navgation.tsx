import { Home, Laptop2, FolderGit2, UserRound } from "lucide-react";
import {NavLink, useLocation } from "react-router-dom";

export function Navgation() {
  const location = useLocation();
  
  return(
    <div className="md:w-96 m-auto  md:flex md:items-center md:justify-center ">
    <div className="text-slate-50 flex items-center shadow-lg shadow-purple-800 justify-center bg-zinc-950/95 w-80 p-4 gap-9 rounded-full">
      <NavLink 
        title="home" 
        className={`rounded-full p-2 hover:bg-zinc-800 ${location.pathname === "/" ? "bg-zinc-800" : ""}`}
        to={"/"}>
          <Home/>
        </NavLink>
      <NavLink 
        title="Tecnologias e habilidades" 
        className={`rounded-full p-2 hover:bg-zinc-800 ${location.pathname === "/tecnologies" ? "bg-zinc-800" : ""}`}
        to={"/tecnologies"}>
        <Laptop2/>
        </NavLink>
      <NavLink 
        title="Projetos" 
        className={`rounded-full p-2 hover:bg-zinc-800 ${location.pathname === "/projects" ? "bg-zinc-800" : ""}`}
        to={"/projects"}>
        <FolderGit2/>
        </NavLink>
      <NavLink 
        title="sobre" 
        className={`rounded-full p-2 hover:bg-zinc-800 ${location.pathname === "/about" ? "bg-zinc-800" : ""}`}
        to={"/about"}>
        <UserRound/>
        </NavLink>
    </div>

  </div>
  )
}