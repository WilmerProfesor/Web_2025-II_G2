import './App.css'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EpisodiesPage from './Pages/EpisodiesPage/EpisodiesPage'
import CharactersPage from './Pages/CharactersPage/CharactersPage'
import LocationPage from './Pages/LocationPage/LocationPage'

function App() {
  return (
    <Router>
      <Header />
      <div id='container-pages'>
        <NavBar />            
        <Routes>        
          <Route path='/episodios' element={<EpisodiesPage />} />
          <Route path='/personajes' element={<CharactersPage />} />
          <Route path='/localizacion' element={<LocationPage />} />
          <Route path='/*' element={<LocationPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
≈≈