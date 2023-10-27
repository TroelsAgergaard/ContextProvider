import { useState } from 'react'
import Value from './components/Value'
import myContext from './context/myContext'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const [context, setContext] = useState("Context Value...");

  return (
    <myContext.Provider value={[context, setContext]}>
      <header>Context value: <Value /></header>
      <Outlet context={context}/>
      <footer>Dette er en footer som skal vise vores context: <Value /></footer>
    </myContext.Provider>
  )
}

export default App
