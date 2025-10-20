import { useEffect, useState } from 'react'
import './News.css'
import { doc, getDoc } from "firebase/firestore";
import db from '../../Firebase/ConfigFirebase';

const News = () => {

  const [news, setNews] = useState(null)
  

  useEffect(()=>{
    const cargarDatos = async() => {
      const docRef = doc(db, "noticias", "noticia1");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setNews({...docSnap.data(),id:docSnap.id})                        
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }      
    }
    cargarDatos();        
  },[])
 

  return (
    <>
    {news?<> 
    <h2>{news.titular}</h2>
      {/* <img src="" alt="" /> */}
      <p>{news.fecha}</p>
      <p>{news.noticia} </p>

    </>:<p>Cargando datos...</p>}
      
    </>
  )
}

export default News