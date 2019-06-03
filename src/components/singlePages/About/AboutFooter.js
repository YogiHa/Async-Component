import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavLink } from 'reactstrap';

function AboutFooter(){
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

	return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>
      <nav className="bt bb tc mw7 center mt4">
      <div className="ph4">
     <button className="pa3 f2 link dim ph3 pv2 mb2 dib white bg-purple" href="#0"><NavLink  tag={RRNavLink} exact to={process.env.PUBLIC_URL + "/"} >Back to app</NavLink></button>
     </div></nav> </div>
    </div>
  );
}



export default AboutFooter

