import { useState } from 'react'
import '../App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='IndexMain'>
      <div className='header'>
        <a href=""><p>Avançar</p></a>
      </div>
        <div className='placa'>Placa das propagandas</div>
        <div className='ultimoJogo'>Último jogo</div>
        <div className='thumbnail'>Miniatura da partida</div>
        <div className='liga'>Liga atual</div>
        <div className='aoVivo'></div>
        <div className='partidaDestaque'>Partida de destaque</div>
        <div className='proximasPartidas'>Próximas partidas</div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/q8cwzzf35yI?si=1LAiKQeHISkXZBgR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video'></iframe>
    </main>
    </>
  )
}

export default Home
