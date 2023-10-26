// REACT
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// CSS
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//Componentes
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

// PAGES
import Inicio from './pages/Inicio'
import Ubicacion from './pages/Ubicacion'
import Contactenos from './pages/Contactenos'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <main className="App-main">  
          <Routes>
            <Route path='/Xustans' element={<Inicio/>}/>
            <Route path='/Xustans/ubicacion' element={<Ubicacion/>}/>
            <Route path='/Xustans/contactenos' element={<Contactenos/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
