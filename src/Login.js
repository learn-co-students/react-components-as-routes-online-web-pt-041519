import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <form>
                <h1>Login</h1>
                <div>
                    <label htmlFor='username'>Username: </label>
                    <input type='text' name='username' placeholder='username' />
                </div>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' name='password' placeholder='password' />
                </div>
                <input type='submit' value='Login' />
            </form>
        )
    }
}

export default Login