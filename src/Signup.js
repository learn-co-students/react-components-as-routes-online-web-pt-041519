import React from 'react';

export default class Signup extends React.Component {
    render() {
        return (
          <form>
            <h1>Signup</h1>
            <div>
              <input type="text" name="username" placeholder="Username" />
              <label htmlFor="username">Username</label>
            </div>
            <div>
              <input type="password" name="password" placeholder="Password" />
              <label htmlFor="password">Password</label>
            </div>
            <div>
              <input type="password" name="passwordConfirmation" placeholder="Confirm Password" />
              <label htmlFor="passwordConfirmation">Confirm Password</label>
            </div>
            <input type="submit" value="Signup" />
          </form>
        );
      }
}