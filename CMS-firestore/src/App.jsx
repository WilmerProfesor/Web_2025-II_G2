import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import News from './Components/News/News'
import Admin from './Components/Admin/Admin'

function App() {  

  return (
    <>
      <Header/>
      <h1>Hola Mundo</h1>

      <News/>
      <p>...</p>
      <Admin/>
    </>
  )
}

export default App
