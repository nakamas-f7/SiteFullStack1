import React from 'react'

import './style.css'

function Card(props){

    return(
        <div className='Card'>
            <p><strong>{props.name}</strong></p>
            <p>{props.data}</p>
            <button id='deletar'></button>
        </div>
    )
}

export default Card