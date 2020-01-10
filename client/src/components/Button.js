import React from 'react';
import { Link }  from "react-router-dom";

const Button = (props) => {
    let text = props.buttonText
    let path = props.pathName

    return (
        <Link to={`/${path}`}>
            <button className="button large" type={props.type}>{text}</button>
        </Link>
    )
}

export default Button;
