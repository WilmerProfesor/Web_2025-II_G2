import {useState} from 'react'
import db from '../../Firebase/ConfigFirebase'
import { doc, setDoc } from "firebase/firestore";

const Admin = () => {
    const [news, setNews]= useState({fecha:"kjhk", titular:"kjhk", noticia:"kjhk", imagen:"kjhk"}) //null
    
    const handData=()=>{
      
      const cityRef = doc(db, 'noticias', 'noticia1');      
      setDoc(cityRef, news);       
    }

  return (
    <>
        <div>Cargar noticias</div>
        <input type="text" placeholder='Titular' />
        <input type="text" placeholder='Fecha' />
        <input type="text" placeholder='Noticia' />
        <input type="text" placeholder='imagen' />
        <input type="submit" value='Enviar' onClick={handData}/>
    </>

  )
}

export default Admin
