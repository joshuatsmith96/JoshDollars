import './App.css'
import {Routes, Route} from 'react-router-dom'

//Global Components
import Navigation from './components/Nav'
import Footer from './components/Footer'

//Pages
import Home from './pages/Home/Home'
import Introduction from './pages/Introduction/Introduction'
import Resources from './pages/Resources/Resources'
import Participate from './pages/Participate/Participate'
import FAQ from './pages/FAQ/FAQ'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/Joshdollars/" element={ <Home /> }/>
        <Route path="/Joshdollars/Introduction" element={ <Introduction /> }/>
        <Route path="/Joshdollars/Resources" element={ <Resources /> }/>
        <Route path="/Joshdollars/Participate" element={ <Participate /> }/>
        <Route path="/Joshdollars/FAQ" element={ <FAQ /> }/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App