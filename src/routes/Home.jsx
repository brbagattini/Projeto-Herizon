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
        <div className='ultimoJogo'>
          <div className='UltimoJogoContainer'>
              <img src="" alt="" id='ultimoJogoEscudoA' />
              <h1 id='ultimoJogoGolsA'></h1>
            <h1>X</h1>
              <h1 id='ultimoJogoGolsB'></h1>
              <img src="" alt="" id='ultimoJogoEscudoA'/>
          </div>
        </div>
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
        <div className='liga'>
          <div className='LegendaLiga'>
            <p>Clubes</p>
            <p className='Pontos'>Pts</p>
            <p>Pj</p>
            <p>V</p>
            <p>E</p>
            <p>D</p>
            <p>GM</p>
            <p>GC</p>
            <p>SG</p>
          </div>
          <div className='LegendaLiga'>
            <div className='Clube'>
              <img src="" alt="" />
              <p>Barcelona</p>
            </div>
            <p className='Pontos'>43</p>
            <p>43</p>
            <p>43</p>
            <p>43</p>
            <p>43</p>
            <p>2</p>
            <p>4</p>
            <p>4</p>
          </div>
        </div>
        <div className='aoVivo'></div>
        <div className='proximasPartidas'>
          <div className='proximascontainer'>
            <div className='clubeproximas'>
              <img src="" alt="" />
              <p>Corinthians</p>
              <p>VS</p>
              <p>Cruzeiro</p>
              <img src="" alt="" />
            </div>
            <div className='informacoes'>
              <div className='Local'>
                <img src="" alt="" />
                <p>Neo Quimica Arena</p>
              </div>
              <div className='Hora'>
                <img src="" alt="" />
                <p>14/09 10:30</p>
              </div>
            </div>
          </div>
          <div className='proximascontainer'>
            <div className='clubeproximas'>
              <img src="" alt="" />
              <p>Cruzeiro</p>
              <p>VS</p>
              <p>Corinthians</p>
              <img src="" alt="" />
            </div>
            <div className='informacoes'>
              <div className='Local'>
                <img src="" alt="" />
                <p>Independência</p>
              </div>
              <div className='Hora'>
                <img src="" alt="" />
                <p>07/09 10:30</p>
              </div>
            </div>
          </div>
          <div className='proximascontainer'>
            <div className='clubeproximas'>
              <img src="" alt="" />
              <p>Cruzeiro</p>
              <p>VS</p>
              <p>Palmeiras</p>
              <img src="" alt="" />
            </div>
            <div className='informacoes'>
              <div className='Local'>
                <img src="" alt="" />
                <p>Independência</p>
              </div>
              <div className='Hora'>
                <img src="" alt="" />
                <p>31/08 10:30</p>
              </div>
            </div>
          </div>
          <div className='proximascontainer'>
            <div className='clubeproximas'>
              <img src="" alt="" />
              <p>Corinthians</p>
              <p>VS</p>
              <p>São Paulo</p>
              <img src="" alt="" />
            </div>
            <div className='informacoes'>
              <div className='Local'>
                <img src="" alt="" />
                <p>Canindé</p>
              </div>
              <div className='Hora'>
                <img src="" alt="" />
                <p>31/08 10:30</p>
              </div>
            </div>
          </div>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/to-Ry1utIlE?si=SmLgAR74zgTPs7he" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video'></iframe>
    </main>
    </>
  )
}

export default Home
