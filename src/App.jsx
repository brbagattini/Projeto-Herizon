import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <button type="button" className='BtnMenu'>Menu</button>
      <div className='Nav-Link-Div'>
        <a href="" className='Nav-Link'>Notícias</a>
        <a href="" className='Nav-Link'>Atletas e Clubes</a>
        <a href="" className='Nav-Link'>História</a>
      </div>
      <div className='search-bar-Div'>
        <input type="text" className='search-bar'/>
      </div>
      <div className='PerfilDiv'>
        <img src="" alt="" className='ImgPerfil'/>
        <a href="" className='Perfil-Link'>perfil</a>
      </div>
    </nav>
    <main>
    </main>
    </>
  )
}

export default App
