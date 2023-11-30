function Button(props) {
    return <input className={"button " + props.role} type="button" value={props.value} onClick={props.handleClick}/>
};

export default Button;