import React from 'react'
import './CardCharacters.css'

const CardCharacters = ({data}) => {
  return (
    <card className='card-character'>
        <img src={`https://cdn.thesimpsonsapi.com/500${data.portrait_path}`} alt={data.name} />
        <h2>{data.name}</h2>
        <p>ID: {data.id}</p>
        <p>Nombre: {data.name}</p>
        <p>Edad: {data.age}</p>
        <p>Fecha de Nacimiento: {data.birthdate}</p>
        <p>Género: {data.gender}</p>
        <p>Ocupación: {data.occupation}</p>
        <p>Frases: {data.phrases.join(", ")}</p>
    </card>
  )
}

export default CardCharacters