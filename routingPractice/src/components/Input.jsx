import React from 'react'
import { useParams } from 'react-router'

const Input = (props) => {
    const {input} = useParams()
    return(
        // not is not a number truthy means if it IS true do this, if its not then : do this
        <h1>{!isNaN(input) ? "The number is: " + input + '🤑' : "The word is: " + input +"🤡"}</h1>
    )
} 
export default Input