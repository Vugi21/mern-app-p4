import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";

function Navbar(props){

    let nav = props.currentUser ?
    <div className="nav">
        <div>Encylopadia of Countries</div>
        <ul>
            <li><NavLink to='/' activeClassName="active">Home</NavLink></li>
            <li><span className="user">Welcome {props.currentUser.name}</span></li>
            <li><NavLink to='/countries' activeClassName="active">Countries</NavLink></li>
            <li><NavLink to='/countries/new' activeClassName="active">Add Country</NavLink></li>
            <li><NavLink to='/' activeClassName="active" onClick={props.handleLogout}>Logout</NavLink></li>
            <li><NavLink to='/about' activeClassName="active">About</NavLink></li>
        </ul>
    </div> 
    :
    <div className="nav">
        <div className='nav'>Encylopadia of Countries</div>
        <ul>
            <li><NavLink to='/' activeClassName="active">Home</NavLink></li>
            {/* <li><NavLink to='/puppies' activeClassName="active">Puppies</NavLink></li> */}
            <li><NavLink to='/login' activeClassName="active">Login</NavLink></li>
            <li><NavLink to='/signup' activeClassName="active">Signup</NavLink></li>
            <li><NavLink to='/about' activeClassName="active">About</NavLink></li>
        </ul>
    </div> 

    return nav
}

export default Navbar