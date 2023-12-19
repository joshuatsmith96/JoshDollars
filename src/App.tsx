import './App.css'
import {Routes, Route} from 'react-router-dom'

//Global Components
import Navigation from './components/Nav'
import Footer from './components/Footer'

//Pages
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/JoshDollars/" element={ <Home /> }/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App