import React from 'react'
import Axios from 'axios'

import './style.css'

function Card(props){
    const deletar = () => {
        Axios.post("http://localhost:3001/deleta", {
            Id: props.Id
        }).then(response => {
            console.log(response)
        })
    }
    return(
        <div className='Card'>
            <p><strong>{props.name}</strong></p>
            <button onClick={deletar} id='deletar'></button>
        </div>
    )
}

export default Card