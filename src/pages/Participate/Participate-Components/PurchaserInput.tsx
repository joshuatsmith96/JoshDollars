interface Props{
    Image: any,
    Text: string,
    id: string
}

function PurchaserInput(props: Props){
    
    let input:any;
    const watcher = (e:any) => {
        if(e.target.id === "USD"){
            input = document.getElementById("JSD")
            input!.value=e.target.value / 100
        } else {
            input = document.getElementById("USD")
            input!.value=e.target.value * 100
        }
    }
    
    return(
        <div className="PurchaserInput">
            <input id={props.id} type="number" onChange={(e) => {watcher(e)}} placeholder="0"/>
            <div className="PurchaserInput-Image-Container">
                <img src={props.Image} alt="" />
                <p>{props.Text}</p>
            </div>
        </div>
    )
}

export default PurchaserInput