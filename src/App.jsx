import { useState } from 'react'
import './App.scss'

import JoinForm from "./pages/JoinForm/JoinForm";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <JoinForm />
    </div>
  )
}

export default App
