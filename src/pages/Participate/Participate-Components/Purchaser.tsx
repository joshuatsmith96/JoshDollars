import PurchaserInput from "./PurchaserInput"

//Images
import USFlag from '../../../assets/Images/flag.png'
import JSD from '../../../assets/Images/Joshdollar.png'

function Purchaser(){
    return(
        <div className="Purchaser">
            <h1>PURCHASE</h1>
            <PurchaserInput id="USD" Image={USFlag} Text="USD"/>
            <PurchaserInput id="JSD" Image={JSD} Text="JSD"/>
            <div className="quick-buttons">
            </div>
            <p id="conversion-label">You will recieve 1 JSD for $100 USD</p>
            <button id="continue-button">Continue</button>
        </div>
    )
}

export default Purchaser