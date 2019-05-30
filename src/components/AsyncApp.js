import React, { useState } from 'react';
import Home from './singlePages/Home/Home';
import Footer from './Footer/Footer'
import AsyncComponent from './AsyncComponent'


function AsyncApp({user, setIsProfileOpen}) {
   const [route,setRoute] = useState('Home');
  const router = (event) => {
    setRoute(event)
  }
     switch(route)  {
      case 'Home':
         return (
         <div className="App">
         <Home user={user} setIsProfileOpen={setIsProfileOpen} />
         <Footer router={router} />
         </div>)
      case 'WethWhat':
          const WethWhat = AsyncComponent(() => import('../controllers/wethwhat/WethWhat'));
      return (
         <div className="App">
         <WethWhat user={user} />
         <Footer router={router}/>
         </div>)
      case 'SmartBrain':
         const SmartBrain = AsyncComponent(() => import('../controllers/smart-brain/SmartBrain'));
      return (
         <div className="App">
         <SmartBrain user={user}  />
         <Footer router={router}/>
         </div>)
      default :
      return <h1> Has been error, pl refresh </h1> }
           

} 
export default AsyncApp;
