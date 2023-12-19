

interface Props{
    Img: any,
    Header: string,
    Text: string
}

function ExplainCard(props: Props){
    return(
        <div className="ExplainCard">
            <div className="ExplainCard-Img-Container">
                <img src={props.Img} alt="" />
            </div>
            <div className="ExplainCard-Content">
                <h1>{props.Header}</h1>
                <p>{props.Text}</p>
            </div>
        </div>
    )
}

export default ExplainCard