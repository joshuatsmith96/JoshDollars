import './Introduction.css'
//Comonents
import PageHeader from '../../components/PageHeader'
import ExplainCard from './Introduction-Components/ExplainCard'

//IMAGES
import Start from '../../assets/Images/start.png'
import Balances from '../../assets/Images/balances.png'
import Transactions from '../../assets/Images/transaction.png'
import Processing from '../../assets/Images/processing.png'

function Introduction(){
    return(
        <div className="Introduction">
            <PageHeader text='How Does Joshdollar Work?'/>
            <ExplainCard Img={Start} Header='Starting Out with Joshdollar' Text='Starting any crypto currency can be a struggle, escpecially if you’re new. However, getting started is as easy as installing a Crypto Currency App / Wallet, and purchasing Joshdollar from that app.' />
            <ExplainCard Img={Balances} Header='Balances' Text='Balances are tracked inside of the block chain, which is where cryptocurrencies reside. Every transaction is processed inside of this block chain. It allows for crypto currencies (such as Joshcoin) to accurately tell how much a users spendable balance is.'/>
            <ExplainCard Img={Transactions} Header='Transactions' Text='When we refer to transactions in context with Joshcoin, we’re talking about transactions between your cryptocurrency wallet and the block chain. The wallets use a private key (commonly referred to as a seed) to prove who owns that particular cryptocurrency. Every transaction is broadcast and can be confirmed within about 30 minutes. This whole process is referred to as mining.'/>
            <ExplainCard Img={Processing} Header='Processing' Text='When a cryptocurrency (such as Joshcoin) is being processed, the blockchain confirms all transactions. This will enable cryptocurrency wallets to figure out the balance allowable for spending. This ensures that newer transaction are secure.'/>
        </div>
    )
}

export default Introduction