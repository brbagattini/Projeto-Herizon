// import { useState } from 'react'
import '../App.css'
import { Link } from "react-router-dom";

export default function SobreNos() {
  // const [count, setCount] = useState(0)
  return (
    <>
    <main className="SobreNosMain">
      <div className="header">
        <Link to="/clubes"><p>Voltar</p></Link>
      </div>
      <div className="HistoriaSlideshow">
        <img src="" alt="" />
      </div>
      <div className="TextHistoria">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et perferendis soluta qui aut. Explicabo maxime eum, quam recusandae eaque saepe voluptate neque culpa. Maxime assumenda odio expedita, nemo facere ad.</p>
      </div>
    </main>
    </>
  );
}
