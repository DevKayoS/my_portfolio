import { BioCard } from "./components/bio-card"
import { Card } from "./components/card"
import { Header } from "./components/header"

export function App() {
  return (
    <div>
      <Header/>
      <Card/>
      <BioCard/>
      <div className="w-full bg-slate-500"/>
    </div>
  )
}
