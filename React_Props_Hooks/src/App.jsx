import './App.css'
import Header from './Componets/Header/Header'
import Footer from './Componets/Footer/Footer'
import CardSection from './Componets/CardSection/CardSection'
import AccordionSection from './Componets/AccordionSection/AccordionSection'

function App() {
  
  return (
    <>
      <Header />      
      <main>
        <section id='card-section'>
          <CardSection />      
          <CardSection />     
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
