/**
 * Created by zylee on 2016/10/20.
 */
import React from 'react'
import { render } from 'react-dom'

class Welcome extends React.Component {
    constructor(props) {
        super(props);

    }
    render(){
        return (
            <div className="welcome" style={{height:"50px",background:"green"}}>
                hello world!
            </div>
        )
    }
}

export default Welcome
