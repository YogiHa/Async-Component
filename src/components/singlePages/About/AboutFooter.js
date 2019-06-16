import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavLink } from 'reactstrap';

function AboutFooter(){
	const footerStyle = {
  padding: "4%",
  position: "fixed",
  left: "0",
  bottom: "8%",
  height: "10px",
  width: "100%"
};

const phantomStyle = {
  display: "fixed",
  padding: "0%",
  height: "0%",
  width: "100%"
};

	return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>
      <div className="ph4">
     <NavLink  tag={RRNavLink} exact to={process.env.PUBLIC_URL + "/"} ><button className="pa3 f2 link dim ph3 pv2 mb2 dib white bg-purple" href="#0">Back to app</button></NavLink>
     </div></div>
    </div>
  );
}



export default AboutFooter

