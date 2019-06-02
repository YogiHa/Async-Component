import React, { useState } from "react";
import Logo from './components/Logo/Logo';
import Input from './components/Input/Input';
import APICall from './components/APICall';
import './WethWhat.css'
import HistoryItem from './components/HistoryItem';

function WethWhat({user}) {
const [location, setLocation] = useState('');
const [list, setList] = useState([]);
const sendLocation = text => {
  setLocation({text}) 
        }
  const updateCount = event => {
      fetch('http://localhost:3000/location', {
            method: 'put',
            headers: {'Content-Type': 'application/json',
        'Authorization' : window.sessionStorage.getItem('token')},
            body: JSON.stringify({
              id: user.id
            })
          })
            .then(response => response.json())
            .then(count => {
             Object.assign(user, { entries: count})
            })
            .catch(console.log())      
  }
  const updateList = text => {
    const newList = [...list, {text}]
    setList(newList);
  }
  const removeItem = index => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }
  const researchItem = (item ,index) => {
   setLocation(item);
   const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }
  
    return (
      <div className="App">
      <Logo />
       <p className='f3 custom'>
        {'displaying temprture by just clicking enter!'}
      </p><br/>
      <Input sendLocation={sendLocation} />
      <APICall location={location} updateCount={updateCount} updateList={updateList} />
      <div>
     {list.map((list, index) => (
          <HistoryItem
            key={index}
            index={index}
            item={list}
            removeItem={removeItem}
            researchItem={researchItem}
          />
        ))}
     </div> <br /> <br />
     <p> for more information <a href="https://github.com/YogiHa/weather-hooks"> https://github.com/YogiHa/weather-hooks</a> </p>
   
      </div>
    );  }
export default WethWhat;
