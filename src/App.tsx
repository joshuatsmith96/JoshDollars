import './App.css'
import Home from './pages/Home/Home'
import {Routes, Route} from 'react-router-dom'

//Global Components
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/JoshDollars/" Component={Home}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
