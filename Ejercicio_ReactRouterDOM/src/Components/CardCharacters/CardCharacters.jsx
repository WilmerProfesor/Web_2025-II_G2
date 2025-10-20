import React from 'react'
import './CardCharacters.css'

const CardCharacters = ({data}) => {
  console.log(data);
  
  return (
    <card className='card-character'>
        <img src={data.img} alt={data.name} />
        <h2>{data.name}</h2>
        <p>ID: {data.id}</p>
        <p>Nombre: {data.name}</p>
        <p>Edad: {data.age}</p>        
        <p>Género: {data.gender}</p>
        <p>Raza: {data.race}</p>        
    </card>
  )
}

export default CardCharacters