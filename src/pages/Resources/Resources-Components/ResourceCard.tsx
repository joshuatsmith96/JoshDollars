interface Props{
    Img: any,
    Header: string,
    Links: any
}

function ResourceCard(props: Props){

    let AllLinks = props.Links.map((link:any) => {
        return(
            <a href="#">{link}</a>
        )
    })

    return(
        <div className="ResourceCard">
            <img src={props.Img} alt="Card Image" />
            <h1>{props.Header}</h1>
            <div className="resource-list center">
                {AllLinks}
            </div>
        </div>
    )
}

export default ResourceCard