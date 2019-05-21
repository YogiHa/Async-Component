import React, { useState } from "react";
import Input from './components/Input';
import APICall from './components/APICall';
import './WethWhat.css'
import HistoryItem from './components/HistoryItem';

function WethWhat(user) {
const [location, setLocation] = useState('');
const [list, setList] = useState([]);

const sendLocation = text => {
	setLocation({text}) 
  const newList = [...list, {text}]
    setList(newList);
    fetch('http://localhost:3000/location', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: user.user.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
             Object.assign(user.user.user, { entries: count})
            })
            .catch(console.log())
  }
  const removeItem = index => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  const researchItem = index => {
setLocation(index)
  }
    return (
      <div className="WethWhat">
      <h1> WethWhat? </h1>
      <h4> displaying temprture by just click enter! </h4>
      <Input sendLocation={sendLocation} />
      <APICall location={location}  />
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
     </div>
   
      </div>
    );  }
export default WethWhat;
