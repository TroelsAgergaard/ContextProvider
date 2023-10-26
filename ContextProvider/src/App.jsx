import { useState } from 'react'
import Value from './components/Value'
import myContext from './context/myContext'
import './App.css'

function App() {
  const [context, setContext] = useState("Context Value");

  return (
    <myContext.Provider value={context}>
      <div>Context value: <Value /></div>
    </myContext.Provider>
  )
}

export default App
