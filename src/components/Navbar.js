import React from 'react';
import {Link} from 'react-router-dom';
import { GiShoppingBag } from "react-icons/gi"
import './Navbar.css'

function Navbar({count}) {
  return (
    <div className='navbar navbar-i '>
        <Link className='link' to='/'>Shopping Cart App</Link>
        <Link className='link' to='/cart'>
       <GiShoppingBag />
       <sup className="sup">{count}</sup>
        </Link>
    </div>
  )
}

export default Navbar