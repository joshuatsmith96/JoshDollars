interface Props {
  value: Number;
}

function QuickButton(props: Props) {
  const quickSelect = () => {
    let usdInput: any = document.getElementById("USD");
    usdInput!.value = props.value;
  };

  return (
    <div className="QuickButton">
      <button onClick={quickSelect}>${props.value.toString()}</button>
    </div>
  );
}

export default QuickButton;
