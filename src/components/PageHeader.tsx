interface Props{
    text: string,
    subText?: string
}

function PageHeader(props: Props){
    return(
        <div className="PageHeader">
            <div className="PageHeaderContainer">
            <h1>{props.text}</h1>
            <p>{props.subText}</p>
            </div>
        </div>
    )
}

export default PageHeader