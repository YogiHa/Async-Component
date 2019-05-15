import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer'
import AsyncComponent from './components/AsyncComponent'

function App() {
   const [route,setRoute] = useState('About');
  const router = (event) => {
    setRoute(event)
  }
 switch(route)  {
  case 'About':
  return (
     <div className="App">
     <About  />
     <Footer router={router} />
     </div>)
  case 'WethWhat':
      const WethWhat = AsyncComponent(() => import('./components/weather-hooks/WethWhat'));
  return (
     <div className="App">
     <WethWhat />
     <Footer router={router}/>
     </div>)
  case 'Page3':
     const AsyncPage3 = AsyncComponent(() => import('./components/Page3'));
  return (
     <div className="App">
     <AsyncPage3 />
     <Footer router={router}/>
     </div>)
  default :
  return <h1> Has been error, pl refresh </h1>


} }
export default App;
