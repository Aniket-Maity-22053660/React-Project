import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ModeToggler from "./toggler.jsx"
function Main(props){
  return (
    <>
    <h1>{props.title}</h1>
    <h2>{props.fun1()}</h2>
    </>
  )
}

function Header(props){
  var var1 = "King Star"
  var fun1 = ()=>{
    return <p>Aniket {"true"} Maity</p>
  }
  return (
    <>
    <Main title={props.title} fun1={fun1}/>
    </>
  )
}

function App() {
 return(
  <>
  <Header title={<h1>King Star Khan</h1>}/>
  <ModeToggler/>
  </>
 )
}

export default App
