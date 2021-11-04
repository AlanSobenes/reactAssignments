import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Planets = (props) => {
    const [obj, setObj] = useState({});
    const { input } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${input}/?format=json`)
            .then(e => {
                setObj(e.data);
            })
            .catch(error => {
                setObj({ error: "Please enter an ID between 1-60🙄" });
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
                    <h1>🪐{obj.name}</h1>
                    <ul style={{listStyle: 'none'}}>
                        <li>Climate: {obj.climate}</li>
                        <li>Terrain: {obj.terrain}</li>
                        <li>Surface Water: {obj.surface_water ? "True":"False"}</li>
                        <li>Population: {obj.population}</li>
                    </ul>
                </div>
            }
        </div>
    )
}
export default Planets