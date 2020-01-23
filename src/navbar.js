import React from 'react'
import { NavLink } from 'react-router-dom'

const Link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white'
  }

class Navbar extends React.Component{
    render() {
        return(
            <div>
                <NavLink
                    to='/'
                    exact
                    style={Link}
                    activeStyle={{
                    background: 'darkblue'
                    }}
                    >Home</NavLink>
                <NavLink
                    to='/about'
                    exact
                    style={Link}
                    activeStyle={{
                    background: 'darkblue'
                    }}
                    >About</NavLink>
                <NavLink
                    to='/login'
                    exact
                    style={Link}
                    activeStyle={{
                    background: 'darkblue'
                    }}
                    >Login</NavLink>
            </div>
        )
    }
}

export default Navbar