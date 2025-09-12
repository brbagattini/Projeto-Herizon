// import { useState } from 'react'
import './App.css'
// Reaproveitamento de estrutura
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <div className='App'>
    <nav>
      <div className='Nav-Link-Div'>
        <a href="/" className='Nav-Link'>Notícias</a>
        <a href="/clubes" className='Nav-Link'>Atletas e Clubes</a>
        <a href="/sobrenos" className='Nav-Link'>História</a>
      </div>
      <div className='search-bar-Div'>
        <input type="text" className='search-bar'/>
      </div>
      <div className='PerfilDiv'>
        <img src="" alt="" className='ImgPerfil'/>
        <a href="" className='Perfil-Link'>perfil</a>
      </div>
    </nav>
      <Outlet></Outlet>
    </div>
    </>
  )
}

export default App
