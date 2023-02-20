
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ChangeBox from './BoxChange'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ChangeBox/>
    </div>
  )
}

export default App
