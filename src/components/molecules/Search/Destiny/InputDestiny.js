import '../Destiny/destiny.css'
import { BiWorld } from 'react-icons/bi';
import { useState } from "react";
import { searchApi } from '../../../../config/axios/axios';

//falta:
//limpiar sugerencias cuando se borra o no se selecciona nada, ver el focus

const InputDestiny = () => {

    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = async (event) => {
        setValue(event.target.value);

        try {
            if (value !== '') {
                const results = await searchApi.get(`/${value}.json`);
                setSuggestions(results?.data?.features);
                console.log(suggestions); 
            }
        } catch (error) {
            console.log("Error fetching data, ", error);
        }
    };

    return (
        <div className='container-destiny'>
            <BiWorld className='iconWorld' />
            <div className='container-input-destiny'>
                <label form='destiny-value' className='title-destiny'>Destino
                    <input className='destiny-value' value={value} onChange={handleChange} />
                </label>    
                {suggestions?.length > 0 && 
                    <div className='suggestionWrapper'>
                        {suggestions.map((suggestion, index) => {
                            return (
                            <p
                                key={index}
                                onClick={() => {
                                setValue(suggestion.place_name);
                                setSuggestions([]);
                                }}
                                className='suggestions'
                            >
                                {suggestion.place_name}
                            
                            </p>
                            );
                        })}
                    </div>
                }
            </div>
        </div>
    )
}

export default InputDestiny
