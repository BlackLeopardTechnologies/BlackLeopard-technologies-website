import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNav from "./components/topNav";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TopNav></TopNav>   
    </>
  )
}

export default App
