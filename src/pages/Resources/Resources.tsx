import './Resources.css'

import PageHeader from '../../components/PageHeader'
import ResourceCard from './Resources-Components/ResourceCard'

//Images
import Lightbulb from '../../assets/Images/light.png'
import Directories from '../../assets/Images/papers.png'
import Guides from '../../assets/Images/guide.png'

function Resources(){
    return(
        <div className="Resources">
            <PageHeader text='Joshdollar Resources'/>
            <div className="resource-card-container">
            <ResourceCard Header='Learning Resources' Img={Lightbulb} Links={["Joshdollar", "Khan Academy", "Lets Talk Joshdollar", "Joshdollar Podcast", "We Love Crypto"]}/>
            <ResourceCard Header='Directories' Img={Directories} Links={["Wallets", "Merchants", "Exchanges", "Merchant Tools", "Projects"]}/>
            <ResourceCard Header='Guides' Img={Guides} Links={["Josh Dollar Help", "GoGoCrypto", "Help My Coins"]}/>
            </div>
        </div>
    )
}

export default Resources