import '../Destiny/destiny.css'
import { BiWorld } from 'react-icons/bi';

const InputDestiny = () => {
    return (
        <div className='container-destiny'>
            <BiWorld className='iconWorld' />
            <div className='container-input-destiny'>
                <label form='destiny-value' className='title-destiny'>Destino
                    <input type='search' className='destiny-value' />
                </label> 
            </div>
        </div> 
    )
}

export default InputDestiny
