import { useState } from "react";

export default function useForm(callback, datos) {
  const [inputs, setInputs] = useState(datos);
  const handleInput = (event) => {
    const { name, value , files, type} = event.target;    
    if(files){
      setInputs({ ...inputs, [name]: value || files[0] });
    }
    else{
      setInputs({ ...inputs, [name]: value });
    }
  };
  
  const handleSubmit = (event) => {    
    event.preventDefault();     
    callback(inputs);   
  };  
  

  return {
    inputs,    
    handleInput,
    handleSubmit,
  };
}