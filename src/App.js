import React, { useState } from 'react';
import Signin from './components/Signin';
import AsyncApp from './components/AsyncApp'
import Register from './components/Register';

function App() { 
	const [logIn, setLogIn] = useState(false);
    const [isRegisted, setIsRegisterd] = useState(false);
    const [user, setUser] = useState({})
     const loadUser = data => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    })
  }
       switch(logIn){
    	case true:
       	return (
    		<div>    		
    		<AsyncApp user={user}/>
    		</div>
    		)
       default: 
       switch(isRegisted){
    	  case true:
    	   return (<div><Signin loadUser={loadUser} setLogIn={setLogIn} setIsRegisterd={setIsRegisterd}/></div>)
    	   default : return (<div><Register loadUser={loadUser} setLogIn={setLogIn} setIsRegisterd={setIsRegisterd}/></div>)
    
    
    }  }
}
export default App


  


  








         
     
     