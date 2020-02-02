import React from 'react'

class Signup extends React.Component {
    render() {
        return (
            <form>
              <div>
                <input type="text" name="name" />
                <label htmlFor="name">Name</label>
              </div>
              <div>
                <input type="text" name="username" />
                <label htmlFor="username">Username</label>
              </div>
              <div>
                <input type="password" name="password" />
                <label htmlFor="password">Password</label>
              </div>
              <div>
                <input type="text" name="address" />
                <label htmlFor="address">Address</label>
              </div>
              <input type="submit" value="signup" />
            </form>
        )
    }
}

export default Signup;