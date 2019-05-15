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
  display: "block",
  padding: "50px",
  height: "10px",
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
     <button value="Page3" onClick={handleClick} className="f6 link dim ph6 pv2 mb2 dib white bg-purple" href="#0">Page3</button>
     <button value='About' onClick={handleClick} className="f6 link dim ph6 pv2 mb2 dib white bg-purple" href="#0">About</button>
    <button value='WethWhat' onClick={handleClick} className="f6 link dim ph6 pv2 mb2 dib white bg-purple" href="#0">WethWhat</button>
      </div>
    </div>
  );
}

export default Footer

