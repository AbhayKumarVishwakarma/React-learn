

function MyButton( props ) {

    const { buttonColor, buttonText, onClick } = props

    return (
        <button onClick={onClick} style={{ backgroundColor: buttonColor }}> {buttonText} </button>
    );
}


export default MyButton