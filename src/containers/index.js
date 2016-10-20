/**
 * Created by zylee on 2016/10/20.
 */
import React from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import Menu from './menu/'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <Menu/>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
module.exports = connect()(App)

