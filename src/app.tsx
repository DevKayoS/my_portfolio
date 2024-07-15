import { Outlet } from "react-router-dom";
import { SocialMidia } from "./components/socialMidias";
import { Navgation } from "./components/navgation";

export function App() {
  return (
    <div className="lg:max-w-[1800px] md:max-w-[1800px] m-auto">
    <div className="min-h-[600px]">
      <SocialMidia/>    
      <Outlet/>
    </div>
    <div className="mb-12">
      <Navgation/>  
    </div>
    </div>
  )
}
