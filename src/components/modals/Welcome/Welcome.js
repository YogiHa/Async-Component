import React, { useState } from 'react';
import './Welcome.css'

function Welcome({setIsWelcomeOpen}) {
	return(
		<div onClick={event=>{event.preventDefault(); setIsWelcomeOpen(false);}} className="profile-modal">
		 <div className='tc grow bg-green br3 pa3 ma2 dib bw2 shadow-5'><div className="measure">
	<h1 className="h1welcome">Welcome to my protfolio!</h1>
      <img alt='robots' src={`https://robohash.org/hagai`} /><br/><br/><br/>
         
         <p className="welcomefont">This is my unic robot, register the app and generate your own. </p>
         <p className="note">Use the dropDown on the top right corner to navigate through the app, <br/>
         click and i'll disappear.</p>
        <h2 className="welcomefont"> Have fun :) </h2><br/><br/><br/>
         <p className="note">The app offers free weather dispaly and face-recognition smart brain in photos </p>

      </div>
    </div>
		</div>)
}

export default Welcome