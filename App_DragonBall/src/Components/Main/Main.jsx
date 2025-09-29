import { useState, useEffect } from 'react'
import CardCharacter from '../CardCharacter/CardCharacter'
import './Main.css'

const Main = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("https://dragonball-api.com/api/characters")
            .then(response => response.json())
            .then(data => setCharacters(data.items))
            .catch(error => console.error(error));
    }, []);

    return (
        
        <main>
            {characters.length > 0 ? characters.map(item => (
                <CardCharacter character={item} key={item.id} />
            )) : <p>No hay personajes disponibles</p>}
        </main>
    )
}

export default Main