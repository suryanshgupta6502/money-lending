import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
function Nav() {




    return (
        <div className='navbar'>

            <Link to="/">login</Link>
            <Link to="/dash">dashboard</Link>
            <Link to="/lend">lenders</Link>
            <Link to="/profile">Profile</Link>
        </div>
    )
}

export default Nav