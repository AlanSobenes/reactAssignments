import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    increaseBirthday = () => {
        this.setState({ age: this.state.age + 1})
    }


    render(){
        const{ firstName, lastName, hairColor} = this.props;
        const{age}=this.state

        return(
            <>
            <h1>{lastName}, {firstName}</h1>
            <h3>Age: {age} </h3>
            <h3>Hair Color: {hairColor}</h3>
            <button onClick={ this.increaseBirthday }>Birthday Button for {firstName} {lastName}</button>
            </>
        )
    }
}
export default PersonCard