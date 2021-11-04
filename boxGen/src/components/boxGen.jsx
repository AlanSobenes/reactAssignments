import React from "react";

const BoxColors = (props) => {
    let colors = props.boxColor;

    return(
        <div style={{display:"flex",justifyContent:"center"}}>
            {colors.map((color, indx) => (
                <div key={indx} >
                    <div style={ {backgroundColor: color, width: '100px', height: '100px', margin: '10px'}}></div>
                </div>
            ))}
        </div>
    );
};

export default BoxColors