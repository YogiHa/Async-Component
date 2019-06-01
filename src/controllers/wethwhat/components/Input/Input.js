import React, {useState} from 'react';
import './Input.css'

function Input({sendLocation, addItem}){
  const [value, setValue] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return; 
    sendLocation(value);
    setValue("")  }

     return (
      <div className="center">
       <div className='center pa4 br3 shadow-5 form1'>
      <form onSubmit={handleSubmit}>
      <input
      aria-label= 'type location here'
       placeholder='search by city name'
        type="text"
        className="f4 pa2 w-70"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={handleSubmit}> Submit </button>
    </form>
     </div>
     </div>)}

    export default Input;