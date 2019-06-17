import React, { useState , useEffect } from "react";
import axios from 'axios';
import Display from './Display';

function APICall({location, updateCount, updateList}){
	let ignore = false;
	const [data, setData] = useState([]);
	const fetchBE = (city) => {
		fetch('http://localhost:3001/locationurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json',
        'Authorization' : window.sessionStorage.getItem('token')},
        body: JSON.stringify({
          city: city
        })
      })
	  .then(response => response.json())
      .then(response => {
      	console.log(response.base, response.name, response.main.temp)
      	if (!response.base === 'stations') {setData([{base: 'nope'}]) } else {setData(response); updateCount(); updateList(location.text)}

	})
      .catch(err => setData([]))
  }
	useEffect(()=> {
		fetchBE(location.text);
    	 return () =>  console.log	}, [location])
return ((data.base === 'stations') ? <Display data={data}/> : (location.text === undefined) ? <div className='note'> <br/> <br/> waiting for searches </div> : <div className='note'> <br/>{`"${location.text}" - invalid city name`} </div> )}

export default APICall;