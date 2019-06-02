import React, {useState, useEffect} from 'react';
import HomeLogo from './HomeLogo/HomeLogo';
import './Home.css';
function Home({user, setIsProfileOpen}){
const [card, setCard] = useState(require('./cards/joker.png'));
useEffect(() =>{
	if (user.entries < 2){setCard(require('./cards/0.png'));}
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
   return (
   	<div className="App">
   	<div className="flex">
   	<HomeLogo className="start" user={user} setIsProfileOpen={setIsProfileOpen} />
   	<h1 className="f3 f2-m f1-l fw2 black-90 mv3" > Welcome {user.name}! </h1></div>
   	<div> <img src={card} className="my-bg" alt='card' /> 
   <br/><h3> get points and achieve premium cards by sending requsts to the smart-brain/wethWhat</h3>
   <br/><h2> SO WHAT ARE YOU WAITING FOR?? </h2></div>
    </div>
  );
}

export default Home
