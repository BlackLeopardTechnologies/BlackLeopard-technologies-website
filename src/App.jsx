import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNav from "./components/topNav";
import {Services} from "./components/Services";

import { AboutPage } from "./components/aboutPage";
import { MissionVision } from "./components/MissionVision";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TopNav></TopNav>  
    <AboutPage></AboutPage>
    <Services></Services>
    <MissionVision></MissionVision>
    </>
  )
}

export default App
