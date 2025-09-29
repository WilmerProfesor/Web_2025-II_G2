import './App.css'
import {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import Header from './Componets/Header/Header'
import Footer from './Componets/Footer/Footer'
import CardSection from './Componets/CardSection/CardSection'
import AccordionSection from './Componets/AccordionSection/AccordionSection'
import CircularProgress from '@mui/material/CircularProgress';

function App() {
    
  const [variable, setVariable] = useState(null)

  useEffect(()=>{ 
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => {        
        setVariable(data.results);
        // console.log(data.results)
      })
      .catch( error => console.log(error) )      
   }
    ,[])

  return (
    <>
      <Header />      
      <div id='tmpContainerButton'>
        <Button variant="outlined" onClick={ () => setVariable([{imade:null, name:"Sin nombre", species:"Sin especificar especie"}]) } >
          Modificar Variable
        </Button>        
      </div>
      <main>        
        <section id='card-section'>          
           {variable!=null? 
              variable.map((item)=>
               <CardSection data={ item } />
            )
           :<CircularProgress />
           }                    
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
