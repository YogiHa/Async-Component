import React, { useState, useEffect } from 'react';
import AsyncApp from './components/AsyncApp'
import Register from './components/forms/Register';
import ToggledDropDown from './components/ToggledDropDown/ToggledDropDown'
import Particles from 'react-particles-js';
import Signin from './components/forms/Signin';
import Modal from './components/modals/Modal';
import Profile from './components/modals/Profile/Profile';
import Scroll from './components/Scroll'
import Welcome from './components/modals/Welcome/Welcome';
import './App.css'

function App() {
    const [isWelocmeOpen, setIsWelcomeOpen] = useState(true);
  	const [isLogedIn, setIsLogedIn] = useState(false);
    const [isRegisterd, setIsRegisterd] = useState(false);
    const [user, setUser] = useState({})
    const [isProfileOpen, setIsProfileOpen] = useState(false)
//particlesjs-config until line 80
const particlesOptions = {
    "particles": {
    "number": {
      "value": 65,
      "density": {
        "enable": false,
        "value_area": 5000
        }
      },
     "color": {
      "value": "#076407"
     },
     "shape": {
       "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 10
      }
     },
    "opacity": {
      "value": 0.5,
       "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
          }
     },
    "size": {
      "value": 0.8,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1
        }
      },
      "line_linked": {
      "enable": true,
      "distance": 235,
      "color": "#109d07",
      "opacity": 1,
      "width": 1.7
     },
      "move": {
      "enable": true,
      "speed": 7.2,
      "direction": "none",
      "random": true,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
        }
      }
   },
  "retina_detect": true
}

const fetchBackend = (token) => {
   fetch('http://localhost:3001/signin' , {
          method: 'post',
          headers: {
            'Content-Type' : 'application/json',
            'Authorization' : token
          }
        })
   .then(resp => resp.json())
   .then(data => {
   	    if (data.id) {
      fetch(`http://localhost:3001/profile/${data.id}` , {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        } 
        })
      .then(resp => resp.json())
      .then(user => {
        if (user) {
          setIsWelcomeOpen(false)
          setUser(user)
          setIsLogedIn(true)
        }
      }).catch(console.log)
        } } )
     .catch(console.log)
}
 useEffect(()=> {
 	const token = window.sessionStorage.getItem('token') ; 
      if (token) {
       fetchBackend(token)
       return() => {console.log()}
      }
     }, [])
 
  return(<div className="App">
     <Particles className='particles' params={particlesOptions} />
    <ToggledDropDown className="end" setIsLogedIn={setIsLogedIn} setIsRegisterd={setIsRegisterd} isRegisterd={isRegisterd} isLogedIn={isLogedIn} setIsProfileOpen={setIsProfileOpen} setUser={setUser}/>
 { isWelocmeOpen &&
<Modal>
<Scroll>
<Welcome setIsWelcomeOpen={setIsWelcomeOpen}/>
</Scroll>
</Modal>}
{ isProfileOpen &&
<Modal>
<Profile setIsProfileOpen={setIsProfileOpen} user={user} setUser={setUser}/>
</Modal>}
{         isLogedIn ?
          <div>        
          <AsyncApp user={user} setIsProfileOpen={setIsProfileOpen} />
          </div>
        : 
         isRegisterd ?
        <div>
        <Signin fetchBackend={fetchBackend} />
        </div> : 
                  <div>
                  <Register fetchBackend={fetchBackend} />
                  </div>
      
      
      } </div>
  )}
export default App


  


  








         
     
     