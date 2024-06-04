import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NaamPage from './NaamPage.jsx'
import CompartFlex from "./CompartFlex.jsx"

function App() {

  return (
    <>
      <CompartFlex/>
      {/* <h1 style={{color:"yellow"}}>this is working or not</h1>
      <NaamPage name="pizza" color={"blue"}/>
      <NaamPage name="burger" color={"green"}></NaamPage> */}
    </>
  )
}

export default App;
