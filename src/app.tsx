// import { BioCard } from "./components/bio-card"
// import { Card } from "./components/card"

import { Header } from "./components/header";
import { Main } from "./components/main";
import { Stacks } from "./components/stacks";


export function App() {
  return (
    <div >
      <Header />
      <Main/>
      <div className="h-px bg-zinc-800"/>
      <Stacks/>
    </div>
  )
}
