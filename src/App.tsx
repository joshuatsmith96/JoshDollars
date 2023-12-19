import './App.css'
import Home from './pages/Home/Home'
import {Routes, Route} from 'react-router-dom'

//Global Components
// import Nav from './components/Nav'
// import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/JoshDollars/" element={ <Home /> }/>
      </Routes>
    </div>
  )
}

export default App
