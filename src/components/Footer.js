import React from 'react';

function Footer({router}){
	const footerStyle = {
  fontSize: "40px",
  color: "white",
  textAlign: "center",
  padding: "50px",
  position: "fixed",
  left: "0",
  bottom: "0",
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
     <button value="SmartBrain" onClick={handleClick} className="f2 link dim ph6 pv2 mb2 dib white bg-purple" href="#0">Smart-Brain</button>
     <button value='Home' onClick={handleClick} className="f2 link dim ph6 pv2 mb2 dib white bg-purple" href="#0">Home</button>
    <button value='WethWhat' onClick={handleClick} className="f2 link dim ph6 pv2 mb2 dib white bg-purple" href="#0">WethWhat</button>
      </div>
    </div>
  );
}

export default Footer

