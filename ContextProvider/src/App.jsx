import { useState } from 'react'
import Value from './components/Value'
import myContext from './context/myContext'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const [context, setContext] = useState(false);

  return (
    <myContext.Provider value={[context, setContext]}>
      <header>Header context: <Value /></header>
      {/* <Outlet context={[context, setContext]}/> */}
      <Outlet />
      <footer>Footer context: {context ? "true" : "false"}</footer>
    </myContext.Provider>
  )
}

export default App
