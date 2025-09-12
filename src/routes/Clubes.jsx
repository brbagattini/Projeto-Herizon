import { useState } from 'react'
import '../App.css'

function Clubes() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='SobreNosMain'>
      <div className='header'>
        <a href=""><p>Voltar</p></a>
        <a href=""><p>Avançar</p></a>
      </div>

    </main>
    </>
  )
}

export default Clubes
