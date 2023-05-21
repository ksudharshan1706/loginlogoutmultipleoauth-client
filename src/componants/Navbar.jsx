import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';  

const Navbar = ({user}) => {
    console.log(user)
    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
      };

      
  return (
    <div className='navbar'>
        <span className='logo'><Link className='link' to="/">Lama App</Link></span>
        {user? 
        <ul className="list">
            <li className="listItem">
                {/* <img src="https://lh3.googleusercontent.com/a/AGNmyxbz18SLTRoTsooi849aMMD_eZBjGDzDEH7hkqTRSg=s96-c" alt = "" className='avatar'/> */}
                <Avatar alt="Remy Sharp" src= {user.photos[0].value} />
            </li>
            <li className="listItem">
                {user.displayName}
            </li>   
            <li className="listItem" onClick={logout}>
                Logout
            </li>
        </ul>
        :<Link className='link' to="/login">Login</Link>}
    </div>
  )
}

export default Navbar