import '../Destiny/destiny.css'
import { BiWorld } from 'react-icons/bi';
import { useState, useRef, useEffect } from "react";
import { searchApiMapBox } from '../../../../config/axios/axios';

const InputDestiny = ( {location, locationChange }) => {

    const [suggestions, setSuggestions] = useState([]);
    const [isFocusInput, setIsFocusInput] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const focusInput = useRef();

    const handleChange = async (event) => {
        locationChange(event.target.value);
        try {
            if (location !== '') {
                const results = await searchApiMapBox.get(`/${location}.json`);
                setSuggestions(results?.data?.features);
            }
        } catch (error) {
            console.log("Error fetching data, ", error);
        }
    };

    const handleBlur = () => {
        setIsFocusInput(false);
        focusInput.current.blur();
    }
    const handleFocus = () => {
        setIsFocusInput(true);
        focusInput.current.focus();
    }

    useEffect( () => {
        if (location === '') {
            setShowSuggestions(false);
        }else if (isFocusInput){
            setShowSuggestions(true);
        }
    }, [location, isFocusInput] )

    return (
        <div className='container-destiny'>
            <BiWorld className='iconWorld' />
            <div className='container-input-destiny' onFocus={handleFocus} onMouseLeave={() => setShowSuggestions(false)}>
                <label form='destiny-value' className='title-destiny'>Destino
                    <input
                        className='destiny-value'
                        value={location}
                        onChange={handleChange}
                        ref={focusInput}
                        onBlur={handleBlur}
                    />
                </label>    
                {suggestions?.length > 0 && showSuggestions && 
                    <div className='suggestionWrapper'>
                        {suggestions.map((suggestion, index) => {
                            return (
                            <p
                                key={index}
                                onClick={() => {
                                locationChange(suggestion.place_name);
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
