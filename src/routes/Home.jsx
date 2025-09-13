// import { useState } from 'react'
import '../App.css'

function Home() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <main className='IndexMain'>
      <div className='header'>
        <a href="/clubes"><p>Avançar</p></a>
      </div>
        <div className='placa'>Placa das propagandas</div>
        <div className='ultimoJogo'>Último jogo</div>
        <div className='thumbnail'>
          <div className='thumbnailtext'>
            <div className='thumbnailtimeA'>
              <img src="" alt="" />
              <h1>Barcelona</h1>
              <h2>VS</h2>
            </div>
            <div className='thumbnailtimeB'>
              <h1>Barcelona</h1>
              <img src="" alt="" />
            </div>
            <div className='informacoes'>
              <div className='Local'>
                <img src="" alt="" />
                <p>Morumbi</p>
              </div>
              <div className='Hora'>
                <img src="" alt="" />
                <p>Morumbi</p>
              </div>
            </div>
          </div>
        </div>
        <div className='liga'>Liga atual</div>
        <div className='aoVivo'></div>
        <div className='proximasPartidas'>Próximas partidas</div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/q8cwzzf35yI?si=1LAiKQeHISkXZBgR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video'></iframe>
    </main>
    </>
  )
}

export default Home
