import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3 customimagelink'>
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p><br/>
      <div className='center'>
        <div className='formimagelink center pa4 br3 shadow-5'>
          <input id="smartBrainInput" placeholder= 'jpeg url photos goes here' aria-label= 'type image adress here' className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
          <button
            id="smartBrainSubmit"
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;