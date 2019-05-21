import React, { useState , useEffect } from "react";
import axios from 'axios';
import Display from './Display';

function APICall({location}){
	let ignore = false;
	const [data, setData] = useState([]);
	const apiKey = //yoyr api key goes here
	useEffect(()=> {
		async function fetchData() {
      const result = await axios(`http://api.openweathermap.org/data/2.5/weather?q=${location.text}&units=metric&appid=${apiKey}`)
	  if (!ignore) setData(result.data);    }
    if (location.text === undefined) {
    	return () => {ignore = false}    }
	 else {fetchData();
    return () => { ignore = true; }	}}, [location])
return (data.base === 'stations' ? <Display data={data}/> : <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> waiting for searches </div>) }

export default APICall;