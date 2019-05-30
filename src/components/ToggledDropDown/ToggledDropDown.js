import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavLink, Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import './ToggledDropDown.css';
import Icon from './icon.png';

export default function ToggledDropDown(info) {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle =(event) => {
		event.preventDefault();
		setDropdownOpen(!dropdownOpen)
    }
            return(
				<div className="pa4 tc end">
				<Dropdown isOpen={dropdownOpen} toggle={toggle} >
				<DropdownToggle  tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen}>
				<img src={Icon}  className="br-100 ba h3 w3 dib pointer custom" alt="avatar"/>
				</DropdownToggle>
				<DropdownMenu right className="b--transparent shadow-5">
				{ info.isLogedIn ? 
			      ( <div className="pointer"><div onClick={toggle}> <NavLink  onClick={event=>{event.preventDefault(); info.setIsProfileOpen(true)}} >View Profile</NavLink> </div>
			      	<div onClick={toggle}> <NavLink onClick={event=>{event.preventDefault(); info.setIsLogedIn(false); info.setIsRegisterd(true); info.setUser({}); window.sessionStorage.clear()}} >Sign Out</NavLink> </div></div>)
			    	: info.isRegisterd ?
			    		(<div className="pointer" onClick={toggle}> <NavLink  onClick={event=>{event.preventDefault(); info.setIsRegisterd(false)}} >Register</NavLink> </div>)
			    		:(<div className="pointer" onClick={toggle}> <NavLink  onClick={event=>{event.preventDefault(); info.setIsRegisterd(true)}} >Sign In</NavLink> </div>)
			    } 
			    <div onClick={toggle}> <NavLink  tag={RRNavLink} exact to="/About" >About</NavLink> </div>
			    </DropdownMenu>
				</Dropdown>
				</div>)   }
