import React, { useState } from 'react';
import './Profile.css'

function Profile({setIsProfileOpen, user, setUser}) {
  const [name, setName] = useState(`${user.name}`);

  const onFormChange = event => {
    setName(event.target.value)
  }

  const onSendingForm = (data) => {
    fetch(`http://localhost:3000/profile/${user.id}`, {
      method: 'post',
      headers: {
        'Content-Type' : 'application/json' ,
        'Authorization' : window.sessionStorage.getItem('token')} ,
      body: JSON.stringify({formInput: data})
    }).then(resp=>{
      setIsProfileOpen(false);
      setUser({...user, ...data})
    })
           .catch(console.log)
      }
  
   
	return(
		<div className="profile-modal">
		 <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${name}`} />
      <div>
      <h1>{name}</h1>
        <div className="measure">
            <fieldset id="user name" className="ba b--transparent ph0 mh0">
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="user-name"></label>
                <input
                aria-label= 'type new name here'
                onChange={onFormChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70 hover-black"
                  type="text"
                  name="name"
                  id="name"
                  placeholder={`arn't ${user.name}? change it here`}
                />
               <a  onClick={event=>{event.preventDefault();onSendingForm({name})}} className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green" href="#0">V</a>
              </div>
              </fieldset></div>
        <p>Total points: {user.entries}</p>
        <a onClick={event=>{event.preventDefault(); setIsProfileOpen(false);}} className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-light-purple" href="#0">X</a>
      </div>
    </div>
		</div>)
}

export default Profile