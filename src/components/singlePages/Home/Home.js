import React, {useState, useEffect} from 'react';
import Logo from './Logo';
import Scroll from '../../Scroll'
import './Home.css';
function Home({user, setIsProfileOpen}){
const [card, setCard] = useState(require('./cards/0.png'));
useEffect(() =>{
	if (user.entries >= 15){setCard(require('./cards/joker.png'));}
	else if (user.entries == 2) {setCard(require('./cards/2.png'))}
	else if (user.entries == 3) {setCard(require('./cards/3.png'))}
	else if (user.entries == 4) {setCard(require('./cards/4.png'))}
	else if (user.entries == 5) {setCard(require('./cards/5.png'))}
	else if (user.entries == 6) {setCard(require('./cards/6.png'))}
	else if (user.entries == 7) {setCard(require('./cards/7.png'))}
	else if (user.entries == 8) {setCard(require('./cards/8.png'))}
	else if (user.entries == 9) {setCard(require('./cards/9.png'))}
	else if (user.entries == 10) {setCard(require('./cards/10.png'))}
	else if (user.entries == 11) {setCard(require('./cards/jack.png'))}
	else if (user.entries == 12) {setCard(require('./cards/queen.png'))}
	else if (user.entries == 13) {setCard(require('./cards/king.png'))}
	else if (user.entries == 14) {setCard(require('./cards/ace.png'))}
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
