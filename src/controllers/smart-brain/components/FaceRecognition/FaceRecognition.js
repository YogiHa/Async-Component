import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className='center ma'>
      <div className='relative mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {boxes.map(box =>{
                 return  (<div 
                      id="faceBox"
                      key={`box${box.topRow}${box.rightCol}`}
                      className='bounding-box'
                      style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
                  </div>)
          }
        )}
    </div>
    </div>
  );
}

export default FaceRecognition;