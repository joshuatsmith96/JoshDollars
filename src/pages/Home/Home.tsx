import Hero from "./home-components/Hero"
import GettingStarted from "./home-components/GettingStarted"
import './home.css'

function Home(){
    return(
        <div className="Home">
            <Hero />
            <GettingStarted />
        </div>
    )
}

export default Home