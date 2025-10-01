import {useState, useEffect} from 'react'
import './Main.css'
import CardCharacter from '../CardCharacter/CardCharacter'

// const characters=[
//     {
//         id:1,
//         name:"Naruto Uzumaki",
//         image:"https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png"
//     },
//     {
//         id:2,
//         name:"Sasuke Uchiha",
//         // image:"https://static.wikia.nocookie.net/naruto/images/5/5e/Sasuke_Part_II.png/revision/latest?cb=20201115015406&path-prefix=es"
//     },
//     {
//         id:3,
//         name:"Sakura Haruno",
//         // image:"https://static.wikia.nocookie.net/naruto/images/6/66/Sakura_Part_II.png/revision/latest?cb=20201115015411&path-prefix=es"
//     }
// ]


const Main = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
      fetch('https://dattebayo-api.onrender.com/characters')
        .then(response => response.json())
        .then(data => setCharacters(data.characters));
    }, [])

  return (
    <main>
      {
        characters.length>0?
        characters.map(item=>(
            <CardCharacter key={item.id} character={item}/>
        )):
        <p>No hay personajes para mostrar</p>
      }
      
    </main>
  )
}

export default Main