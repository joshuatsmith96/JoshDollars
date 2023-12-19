import PageHeader from '../../components/PageHeader'
import FAQCard from './FAQ-Components/FAQCard'
import "./FAQ.css"

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//Checks if element is in view
const isInViewport = (element: any) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//Scrolls to specific element if clicked
const scrollTo = (scrollId: any) => {
    let scrollto = document.querySelector("#" + scrollId)
    scrollto?.scrollIntoView();
}


function FAQ() {
    
    //Starts the event listeners
    const location = useLocation();
    useEffect(() => {
        //All Locations
        let faqGeneral = document.querySelector("#faq-general")
        let faqTransaction = document.querySelector("#faq-transactions")
        let faqSecurity = document.querySelector("#faq-security")

        //All Labels
        let faqgenlabel = document.querySelector("#faqgenlabel")
        let faqtranslabel = document.querySelector("#faqtranslabel")
        let facseclabel = document.querySelector("#facseclabel")

        let allLabels = [faqgenlabel, faqtranslabel, facseclabel]
        
        //Event Listener
        let faqContainer = document.getElementsByClassName("faqs-container")[0];
        faqContainer.addEventListener('scroll', () => {
            if(isInViewport(faqGeneral)){
                allLabels.map((x:any) => {x?.removeAttribute("class")})
                faqgenlabel?.setAttribute("class", "faq-active")
            } else if(isInViewport(faqTransaction)){
                allLabels.map((x:any) => {x?.removeAttribute("class")})
                faqtranslabel?.setAttribute("class", "faq-active")
            } else if(isInViewport(faqSecurity)){
                allLabels.map((x:any) => {x?.removeAttribute("class")})
                facseclabel?.setAttribute("class", "faq-active")
            }
        })
    }, [location]);

    return (
        <div className="FAQ">
            <PageHeader text='Frequently Asked Questions' subText='For all of your Joshdollar answers and explanations!' />
            <div className="split">
                <div className="faqs-nav">
                    <ul>
                        <li id="faqgenlabel" className='faq-active' onClick={() => scrollTo("faq-general")}>General</li>
                        <li id="faqtranslabel" onClick={() => scrollTo("faq-transactions")}>Transactions</li>
                        <li id="facseclabel" onClick={() => scrollTo("faq-security")}>Security</li>
                    </ul>
                </div>
                <div className="faqs-container">
                    <h1 id="faq-general" className="FAQ-header">General</h1>
                    <FAQCard header={"What is Joshdollar?"} text={"Joshdollar is an interconnected network of users that make up one of the worlds most safisticated payment systems. It is a peer-to-peer network, which means it has no central authority (no middleman)."} />
                    <FAQCard header={"Who created Joshdollar?"} text={"Joshdollar was a concept created up by one of the many Joshes that resides in the Council Of Josh. What started out as a silly idea ended up becoming the dominant world currency."} />
                    <FAQCard header={"Who controls Joshdollar?"} text={"Joshdollar isn’t controlled or owned by anybody. The idea behind the concept of non-ownership is so that power is distributed amongst the users, instead of being monopolized by power-hungry banks."} />
                    <h1 id="faq-transactions" className="FAQ-header">Transactions</h1>
                    <FAQCard header={"Why is my transaction taking a while?"} text={"Transaction times can vary, and there are many factors that determine the time it takes for a transaction to go through. The two most common reasons for longer than normal transaction times are the amount of traffic your wallet app has, and also the amount of transactions being made at the time."} />
                    <FAQCard header={"How much is a transaction fee?"} text={"Transaction fee’s are calculated by the wallet you are using. In theory, transaction fee’s could be zero, however most wallets will charge a small fee for using their service. Other than that, the actual transaction does not cost anything."} />
                    <FAQCard header={"My computer was turned off. Will I still recieve my JoshDollar?"} text={"Yes, you will still receive the promised amount of Joshdollar that you have purchased. Upon startup, your wallet will see an attempt to send Joshdollar to your account. It will then re-establish this connection, and your Joshdollar should transfer. If you have any issues with this, contact the Joshdollar Support Hotline."} />
                    <h1 id="faq-security" className="FAQ-header">Security</h1>
                    <FAQCard header={"Is Joshdollar Secure?"} text={"The Joshdollar technology, as well as all security measures and security keys involved, are among the best security measures in the world. We use top of the line lizard people technology to ensure a smooth and secure transaction."} />
                    <FAQCard header={"Has Joshdollar ever been hacked?"} text={"In the past, security flaws have been found. This of course was before the lizard people got involved with our cryptocurrency. Since their involvement, the security measures involved are beyond human comprehension, thus the probability of being hacked is very low."} />
                </div>
            </div>
        </div>
    )
}

export default FAQ