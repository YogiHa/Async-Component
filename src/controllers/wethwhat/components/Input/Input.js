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
      <div className='center'>
        <div  className='form1 center pa4 br3 shadow-5'>
        <form className="flexform" onSubmit={handleSubmit}>
          <input placeholder= 'type here city name' aria-label= 'type location here' className='f4 pa2 w-70' type='text'  value={value} onSubmit={handleSubmit} onChange={e => setValue(e.target.value)}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={handleSubmit}
          >Submitt</button></form>
        </div>
      </div>
     )}

    export default Input;