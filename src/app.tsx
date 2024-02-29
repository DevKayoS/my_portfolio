// import { BioCard } from "./components/bio-card"
// import { Card } from "./components/card"

import { About } from "./components/about";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Projects } from "./components/projects";
import { Stacks } from "./components/stacks";


export function App() {
  return (
    <div >
      <Header />
      <Main/>
     
      <Stacks/>
         
      <Projects/>
      
      <About/>
    </div>
  )
}
