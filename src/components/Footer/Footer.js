import React from 'react';

function Footer({router}){
	const footerStyle = {
  fontSize: "3rem",
  color: "white",
  textAlign: "center",
  padding: "4%",
  position: "fixed",
  left: "0",
  bottom: "13%",
  height: "10px",
  width: "100%"
};

const phantomStyle = {
  display: "fixed",
  padding: "15%",
  height: "25%",
  width: "100%"
};
   const handleClick = e => {
  e.preventDefault();
  router(e.target.value)
}
	return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>
      <nav className="bt bb tc mw7 center mt4">
      <div className="ph4">
     <button value="SmartBrain" onClick={handleClick} className="pa3 f2 link dim ph3 pv2 mb2 dib white bg-purple" href="#0">Smart-Brain</button>
    <button value='WethWhat' onClick={handleClick} className="pa3 f2 link dim ph3 pv2 mb2 dib white bg-purple" href="#0">WethWhat?</button>
     </div></nav> </div>
    </div>
  );
}



export default Footer

