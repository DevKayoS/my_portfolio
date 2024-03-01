// import { BioCard } from "./components/bio-card"
// import { Card } from "./components/card"

import { About } from "./components/about";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Projects } from "./components/projects";
import { Stacks } from "./components/stacks";


export function App() {
  return (
    <div className="lg:max-w-[1800px] md:max-w-[1800px] max-w-[750px]">
      <Header />
      <Main/>
     
      <Stacks/>
         
      <Projects/>
      
      <About/>
    </div>
  )
}
