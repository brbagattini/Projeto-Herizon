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
    <main className='IndexMain'>
      <div className='Header'>
        <a href=""><p>Avançar</p></a>
      </div>
        <div className='placa'>Placa das propagandas</div>
        <div className='ultimoJogo'>Último jogo</div>
        <div className='thumbnail'>Miniatura da partida</div>
        <div className='liga'>Liga atual</div>
        <div className='aoVivo'>Transmissão ao vivo</div>
        <div className='partidaDestaque'>Partida de destaque</div>
        <div className='proximasPartidas'>Próximas partidas</div>
        <div className='video'>Vídeo da partida</div>
        <div className='creditos'>Créditos</div>
    </main>
    </>
  )
}

export default App
