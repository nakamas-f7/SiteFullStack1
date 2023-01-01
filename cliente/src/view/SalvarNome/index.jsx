import React, {useState, useEffect} from 'react'
import Axios from 'axios'

import './style.css'
import Card from '../../Components/Card'

function Anota() {
  const [Nome, setNome] = useState()
  const [Lista, setLista] = useState()

  const Confirm = () => {
    Axios.post("http://localhost:3001/register", {
      Name: Nome,
    }).then(response => {
      console.log(response)
    })
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/getBanco").then(response => {
      setLista(response.data)
    })
  }, [Confirm])
  return (
    <div className='container'>
      <h1>Informe seu Nome</h1>
      <form action="" method='get'  id='Formulario'>
        <label>
          <input 
          type="text"
          name="Nome"
          id="Nome"
          maxLength= {20}
          placeholder='Digite seu Nome'
          onChange={ value => setNome(value.target.value)}
          />
        </label>
        <button type='button' onClick={Confirm} id='Botao'>Enviar</button>
      </form>

      {
        typeof Lista != "undefined" && 
        Lista.map(cliente => <Card name= {cliente.Nome} key= {cliente.idT_cliente} Id= {cliente.idT_cliente} />)
      }
    </div>
  )
}

export default Anota