import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const People = (props) => {
    const [obj, setObj] = useState({});
    const { input } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${input}/?format=json`)
            .then(e => {
                setObj(e.data);
            })
            .catch(error => {
                setObj({ error: "Please enter an ID between 1-83🙄" });
            });
    }, [input]);

    return (
        <div>
            {obj.error ?
                <div>
                    <h1>{obj.error}</h1>
                </div>
                :               
                <div>
                    <h1>🦸{obj.name}</h1>
                    <ul  style={{listStyle: 'none'}}>
                        <li>Height: {obj.height}</li>
                        <li>Mass: {obj.mass}</li>
                        <li>Hair Color: {obj.hair_color}</li>
                        <li>Skin Color: {obj.skin_color}</li>
                    </ul>
                </div>
            }
        </div>
    )
}
export default People

                    
