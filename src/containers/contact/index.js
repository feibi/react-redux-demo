import React from 'react'
import {
    render
} from 'react-dom'

class Contact extends React.Component {
    constructor(props) {
        super(props)

    }
    handleClick(){
        console.log('点了1ds');
    }
    render() {
        return (
          <div className = "contact" >
            contact
            <button onClick = {this.handleClick.bind(this)}>点</button>
          </div>
        )
    }
}

export default Contact
