import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
 const NavBar = () => {
    const navigate = useNavigate();
  return (
    <div className='navbar'>
        <img src='logo.jpg' alt='Placify' onClick={() => {navigate('/')}}></img>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/jobs'><li>Jobs</li></NavLink>
            <NavLink to='/intern'><li>Internship</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/contact'><li>Contact</li></NavLink>
        </ul>
        <button onClick={ () => {navigate('/about',{replace:true})}}>Try Premium</button>
    </div>
  )
}

export default NavBar;
