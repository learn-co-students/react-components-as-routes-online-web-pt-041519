import React from 'react'

class Signup extends React.Component{
    render() {
        return(
            <form>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password: </label>
          <input type="password" name="confirm-password" placeholder="Confirm password" />
        </div>
        <input type="submit" value="Sign Up" />
      </form>
        )
    }
}

export default Signup