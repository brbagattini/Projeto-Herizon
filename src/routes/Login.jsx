// import { useState } from 'react'
import '../App.css'

function Login() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <main className='LoginMain'>
      <div className='LoginContainer'>
        <input type="text" className='name' name="name" id="name" />
        <input type="email" className='email' name="email" id="email" />
        <input type="password" className='password' name="password" id="password" />
        <input type="password" className='passwordconfirm' name="passwordconfirm" id="passwordconfirm" />
        <input type="date" className='date' name="date" id="date" />
        <select className='gender' name="gender" id="gender">
          <option value=""></option>
          <option value="">Feminino Cisgenero</option>
          <option value="">Masculino Cisgenero</option>
          <option value="">Transfeminino/ Mulher trans</option>
          <option value="">Transmasculino/ Homem trans</option>
          <option value="">Travesti</option>
          <option value="">Não Binario</option>
          <option value="">Prefiro não Informar</option>
        </select>
        <input type="image" className='image' src="image" alt="image" />
        <div className='term'>
          <div>
            <input type="checkbox" name="termServ" id="termServ" />
            <label id='termServtext termtext'>
              Eu li e aceito os <a href="">termos de serviço</a>
            </label>
          </div>
          <div>
          <input type="checkbox" name="termPriv" id="termPriv" />
          <label id='termPrivtext termtext'>
            Eu li e aceito os <a href="">termos de privacidade</a>
          </label>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default Login
