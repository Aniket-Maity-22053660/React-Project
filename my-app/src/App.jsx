import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ModeToggler from "./toggler.jsx"
import guess from "./GuessNumber.js"
import InputComponent from "./userInput";
import {Route, Routes, Link} from "react-router-dom"
import ReactPlayer  from 'react-player'
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
  let url = "https://www.youtube.com/watch?v=vVw6cZVbbTo";
  var fun1 = ()=>{
    return <p>Aniket {"true"} Maity</p>
  }
  var fun2 = ()=>{
    return <ReactPlayer url={url} playing={false} volume={0.5} controls={true}/>
  }
  return (
    <>
    <Main title={props.title} fun1={fun1}/>
    {fun2()}
    </>
  )
}


function App() {
 return(
  <>
  <Link to="/head">Head</Link>
  <Link to="/toggle">Toggle</Link>
  <Link to="/input">Input</Link>
  <Routes>
  <Route path="/head" element={<Header title={<h1>King Star Khan</h1>} />}/>
  <Route path="/toggle" element={<ModeToggler/>}/>
  <Route path="/input" element={<InputComponent/>}/>
  </Routes>
    <button onClick={guess}>Guess Here</button>

  </>
 )
}

export default App
