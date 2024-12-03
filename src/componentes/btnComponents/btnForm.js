import "./btnForm.css"
 const BtnForm = (props) => {
    return(
        <button className="button-style">{props.children}</button>
    )
}

export default BtnForm