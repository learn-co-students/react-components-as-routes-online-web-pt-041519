import React, {Component} from 'react'

export default class Message extends Component {
    render() {
       return <div>
            <form>
                <input type="text" name="message" placeholder="Enter message" />
                <input type="submit" value="Submit Message" />
            </form>
        </div>
    }
}
