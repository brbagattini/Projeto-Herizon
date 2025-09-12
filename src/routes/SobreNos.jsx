import { useState } from 'react'
import '../App.css'

function SobreNos() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='SobreNosMain'>
      <div className='header'>
        <a href=""><p>Voltar</p></a>
      </div>

    </main>
    </>
  )
}

export default SobreNos
