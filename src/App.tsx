import './App.css'
import Home from './pages/Home/Home'
import {Routes, Route} from 'react-router-dom'

//Global Components
import Navigation from './components/Nav'
import Footer from './components/Footer'

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