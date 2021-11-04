import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Form = (props) => {
    const [choice, setChoice] = useState('people');
    const [input, setInput] = useState('');
    const history = useHistory();

    const submit = (e) => {
        e.preventDefault();
        history.push(`/${choice}/${input}`);
    }
    return (
        <div>
            <form onSubmit={submit}>
                <label>Search For: </label>
                <select onChange={e => setChoice(e.target.value)} value={choice}>
                    <option>People</option>
                    <option>Planets</option>
                </select>
                <label>Search ID's: </label>
                <input type="text" onChange={e => setInput(e.target.value)} value={input} />
                <button style={{ background: 'linear-gradient(30deg, rebeccapurple, magenta)',
                    color: '#fff'}}>Search 👽</button>
            </form>
        </div>
    )
}
export default Form;