import React from "react";
const divStyle = {
    background: 'linear-gradient(30deg, rebeccapurple, magenta)', 
    color: '#fff'
}
const PersonCard = props => {
    return(
        <div style={ divStyle }>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    )
}
export default PersonCard