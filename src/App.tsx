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
        <Route path="/JoshDollars/" element={ <Home /> }/>
        <Route path="/JoshDollars/Introduction" element={ <Introduction /> }/>
        <Route path="/JoshDollars/Resources" element={ <Resources /> }/>
        <Route path="/JoshDollars/Participate" element={ <Participate /> }/>
        <Route path="/JoshDollars/FAQ" element={ <FAQ /> }/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App