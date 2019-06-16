import React, { useState , useEffect } from "react";
import axios from 'axios';
import Display from './Display';

function APICall({location, updateCount, updateList}){
	let ignore = false;
	const [data, setData] = useState([]);
	const apiKey = 'your API key goes here'
	useEffect(()=> {
		async function fetchData() {
      let result = await axios(`http://api.openweathermap.org/data/2.5/weather?q=${location.text}&units=metric&appid=${apiKey}`)
	  if (!result.data.base === 'stations') {setData([]) } else {setData(result.data); updateCount(); updateList(location.text)}  }
   	 fetchData();
   	 console.log(data.base)
   	  return () => { console.log() }	}, [location])
return ((data.base === 'stations') ? <Display data={data}/> : (location.text === undefined) ? <div className='note'> <br/> <br/> waiting for searches </div> : <div className='note'> <br/>{`"${location.text}" - invalid city name`} </div> )}

export default APICall;