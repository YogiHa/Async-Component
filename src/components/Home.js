import React from 'react';
import './Home.css';
function Home(user){
   return (
   	<div className="home">
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${user.user.user.name}`} />
      <div>
        <h2>{user.user.user.name}</h2>
        <p>Total points: {user.user.user.entries}</p>
      </div>
    </div>
    </div>
  );
}

export default Home
