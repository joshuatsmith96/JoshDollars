import JoshdollarGraphic from '../../../assets/Images/Joshdollar bg 1.png'

function GettingStarted(){
    return(
        <div className="GettingStarted">
            <h1>Getting Started with Joshdollar</h1>
            <div className="GettingStarted-Content">
                <img src={JoshdollarGraphic} alt="" />
                <p>Joshdollar utilizes what is called <span className="bold">peer-to-peer technology.</span> This allows our network to run without any sort of centralized banking. Any and all transactions using this system are done by a joint effort inside of the network. Joshdollar is open-source. This means that it is not owned or control by any person, government or organization.</p>
            </div>
        </div>
    )
}

export default GettingStarted