import './App.css'
import {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import Header from './Componets/Header/Header'
import Footer from './Componets/Footer/Footer'
import CardSection from './Componets/CardSection/CardSection'
import AccordionSection from './Componets/AccordionSection/AccordionSection'

function App() {
    
  const [variable, setVariable] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(()=>{ 
    const downData = async () => await fetch("https://rickandmortyapi.com/api/character/1")
      .then(response => response.json())
      .then(data => {        
        setVariable(data);
        // console.log(data)
      })
      .catch( error => console.log(error) )
      downData();
      setLoading(false)
   }
  
    ,[loading])

  return (
    <>
      <Header />      
      <div id='tmpContainerButton'>
        <Button variant="outlined" onClick={ () => setVariable("Nuevo Valor") } >
          Modificar Variable
        </Button>        
      </div>
      <main>        
        <section id='card-section'>          
          {/* <CardSection data={{ title: "Card 1", content: "This is the content of card 1." }} />       */}
          <CardSection data={{  variable }} />     
          {/* <CardSection key={1} title= {"Card 1"} content= {"This is the content of card 1."} />      
          <CardSection key={2} title= {"Card 2"} content= {"This is the content of card 2."} />       */}
        </section>
        <section id='accordion-section'>
          <AccordionSection /> 
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
