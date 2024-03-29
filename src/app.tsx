import { Outlet } from "react-router-dom";
import { SocialMidia } from "./components/socialMidias";
import { Navgation } from "./components/navgation";

export function App() {
  return (
    <div className="lg:max-w-[1800px] md:max-w-[1800px] max-w-72">
    <div className="min-h-[500px]">
      <SocialMidia/>    
      <Outlet/>
    </div>
    <div className="flex ">
      <Navgation/>  
    </div>
    </div>
  )
}
