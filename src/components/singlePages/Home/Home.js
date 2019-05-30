import React from 'react';
import HomeLogo from './HomeLogo/HomeLogo';
import './Home.css';
function Home({user, setIsProfileOpen}){
   return (
   	<div className="App">
   	<div className="flex">
   	<HomeLogo className="start" user={user} setIsProfileOpen={setIsProfileOpen} />
   	<h1 className="end f3 f2-m f1-l fw2 black-90 mv3" > Welcome {user.name}! </h1></div>
   	<div>    <h5> get some points by detecting faces in the smart-brain or by discover wethwhat in your faivorite cities :)</h5>
   <br /><br/> <h2> SO WHAT ARE YOU WAITING FOR?? </h2></div>
    </div>
  );
}

export default Home
