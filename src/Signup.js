import React, { Component } from 'react'
import NavLink from 'react-router-dom'

class Signup extends Component {
    render() {
        return (
            <form>
                <h1>Signup</h1>
                <div>
                    <label htmlFor='username'>Username: </label>
                    <input type='text' name='username' placeholder='username' />
                </div>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' name='password' placeholder='password' />
                </div>
                <input type='submit' value='Signup' />
            </form>
        )
    }
}

export default Signup