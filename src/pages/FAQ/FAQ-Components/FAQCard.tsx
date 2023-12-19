interface Props{
    header: String,
    text: String
}

function FAQCard(props: Props){
    return(
        <div className="FAQCard">
            <h1>{props.header}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default FAQCard