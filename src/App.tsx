import './App.css'
import {Routes, Route} from 'react-router-dom'

//Global Components
import Navigation from './components/Nav'
import Footer from './components/Footer'

//Pages
import Home from './pages/Home/Home'
import Introduction from './pages/Introduction/Introduction'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/JoshDollars/" element={ <Home /> }/>
        <Route path="/JoshDollars/Introduction" element={ <Introduction /> }/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App