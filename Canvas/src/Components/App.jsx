import { useEffect, useState } from "react"
import Container from "./Container"

const App = () => {
  const [name, setName] = useState("")

  useEffect(() => {
    const entered = window.prompt("Please enter your name:")
    if (entered && entered.trim()) {
      setName(entered.trim())
    }
  }, [])

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Container name={name} />
    </div>
  )
}

export default App
