// import { useState } from 'react'
import '../App.css'

function Clubes() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <main className='ClubeMain'>
      <div className='header'>
        <a href="/home"><p>Voltar</p></a>
        <a href="/sobrenos"><p>Avançar</p></a>
      </div>
      <div className='ThumbnailJogadoras'>
        <div className='textThumbnailJogadoras'>
          <h1>JOGADORA</h1>
          <p>31 jogos em 40 partidas</p>
        </div>
        <img src="" alt="" />
      </div>
      <div className='Jogadoras'>
        <div className='JogadorasLegenda'>
          <h1></h1>
          <h1>Nome</h1>
          <h1>Idade</h1>
          <h1>Posição</h1>
          <h1>Time</h1>
          <h1>Jogos</h1>
        </div>
        <div className='JogadorasTemplate'>
          <img src="" alt="" />
          <h1>Nome</h1>
          <h1>Idade</h1>
          <h1>Posição</h1>
          <h1>Time</h1>
          <h1>Jogos</h1>
        </div>
      </div>
      <div className='Clubestitle'>
        <h1>Clubes</h1>
        <div className='Clubes'>
          <a href="" className='clubeicon'>
            <img src="" alt="" />
            <p>Figueirense</p>
          </a>
        </div>
      </div>
    </main>
    </>
  )
}

export default Clubes
