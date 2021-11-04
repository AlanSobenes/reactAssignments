import React from 'react'
import { useParams } from 'react-router'

const Color = (props) => {
    const {input, background, color} = useParams();
    return(
        <h1 style={{ backgroundColor:background, color:color}}>
            {!isNaN(input) ? "The number is: " + input + '🤑' : "The word is: " + input +"🤡"}
        </h1>
    )

}
export default Color