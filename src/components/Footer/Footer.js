import React from 'react';

function Footer({route, setRoute}){
  const footerStyle = {
  padding: "4%",
  position: "fixed",
  left: "0",
  bottom: "7%",
  height: "10px",
  width: "100%"
};

const disabled = {
  cursor:" not-allowed",
  pointerEvents: "none",
  backgroundColor: "black" 
}

const phantomStyle = {
  display: "fixed",
  padding: "0%",
  height: "0%",
  width: "100%"
};
   const handleClick = e => {
  e.preventDefault();
  setRoute(e.target.value)
}
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>
      <div className="ph4">
     <button value="SmartBrain" onClick={handleClick} style={(route==="SmartBrain") ? disabled : null} className="pa3 f5 link dim ph3 pv2 mb2 dib white bg-purple" href="#0">Smart-Brain</button>
     <button value='WethWhat' onClick={handleClick} style={(route==="WethWhat") ? disabled : null} className="pa3 f5 link dim ph3 pv2 mb2 dib white bg-purple" href="#0">WethWhat?</button>
     </div> </div>
    </div>
  );
}



export default Footer