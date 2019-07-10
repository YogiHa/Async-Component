import React, {useState, useEffect} from 'react';
import Logo from './Logo';
import Scroll from '../../Scroll'
import './Home.css';
function Home({user, setIsProfileOpen}){
const [card, setCard] = useState(require('./cards/0.png'));
useEffect(() =>{
	if (user.entries >= 15){setCard(require('./cards/joker.png'));}
	else {setCard(require(`./cards/${user.entries}.png`))}
	return() => console.log
},[user])
  const sectionStyle = {
  padding: "0%",
  position: "fixed",
  left: "0",
  bottom: "0%",
  height: "85%",
  width: "100%",
 
};

const phantomStyle = {
  display: "fixed",
  padding: "0%",
  height: "85%",
  width: "100%",
};

	return( 
    <div style = {phantomStyle}>
    <div style = {sectionStyle}>
    <Scroll>
   	<div className="flex">
   	<Logo className="start" user={user} setIsProfileOpen={setIsProfileOpen} />
   	<h1 className=" home1 f3 f2-m f1-l fw2 black-90 mv3" > Welcome {user.name}! </h1></div>
   	<div> <img src={card} className="my-bg" alt='card' /> 
   <br/><h3 className="home2"> get points and achieve premium cards by sending requsts to the smart-brain/wethWhat</h3>
   <br/><h2 className="home1"> SO WHAT ARE YOU WAITING FOR?? </h2></div> <br/><br/><br/><br/>
   <h5 className="home2"> press F5 for returning this page from the services </h5>
    </Scroll>
    </div>
    </div>
  );
}

export default Home
