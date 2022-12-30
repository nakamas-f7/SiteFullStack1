import React, { useState } from 'react'
import './style.css'

import Card from '../../Components/Card'

function Anota() {
  const [Name, setModify] = useState() // 1° parâmetro é o estado que quero mudar, 2° parâmetro é a função que muda esse estado
  const [Pessoas, setPessoas] = useState([]) // 1° parâmetro é o estado que quero mudar, 2° parâmetro é a função que muda esse estado

  function pessoas(){
    const Pessoa = {
      Name: Name, // Name recebe o estado do input
      Data: new Date().toLocaleTimeString("pt-br")
    }

    if(Pessoa.Name != undefined && Pessoa.Name != "" ){
      setPessoas(nomeQueEuQuiser => [...nomeQueEuQuiser, Pessoa]) // assim eu não perco os dados antigos
    }
  }

  return (
    <div className='container'>
      <h1>Informe seu Nome</h1>
      <form action="" method="get" id='Formulario'>
        <label htmlFor="Formulario">
          <input 
          type="text" 
          name="Nome"
          id="Nome" 
          maxLength= {20}
          placeholder='Digite seu Nome'
          onChange= {value => setModify(value.target.value)} // linha responsavel por pegar o valor atual do input
          />
        </label>
        <button type='button' id='Botao' onClick={pessoas}>Enviar</button>
      </form>
      {
        Pessoas.map(Pessoa => <Card key = {Pessoa.Data} name= {Pessoa.Name} data= {Pessoa.Data} />) // key e necessario para diferenciar os componentes, eles precisam ser diferentes
      }
    </div>
  )
}

export default Anota