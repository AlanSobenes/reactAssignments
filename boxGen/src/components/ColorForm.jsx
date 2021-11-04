import React, { useState } from "react";

const ColorForm = (props) => {
    const[color, setColor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addColor(color);
    }

    return(
        <div>
            <form onSubmit={ e => handleSubmit(e)}>
                <input type="text" 
                onChange= { (e) => setColor(e.target.value)}
                value={color}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default ColorForm