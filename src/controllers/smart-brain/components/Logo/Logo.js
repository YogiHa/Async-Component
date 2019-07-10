import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';

const Logo = ({setIsProfileOpen}) => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3">
          <img onClick={event=>{setIsProfileOpen(true)}} style={{paddingTop: '5px'}} alt='logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;