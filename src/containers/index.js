/**
 * Created by zylee on 2016/10/20.
 */
import React from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import {Link} from 'react-router'
//import {VelocityComponent,VelocityTransitionGroup} from 'velocity-react'
import Menu from './menu/'
import Button from './../components/button/button'
// require('velocity-animate');
//require('velocity-animate/velocity.ui');
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSubComponent: true
        }
        //  this.handleClick.bind(this)
    }
    handleClick(e) {
        this.setState({
            showSubComponent: !this.state.showSubComponent
        })
    }

    render() {

        console.log(this.props.location)
        return (
            <div className="container">
                <Menu/> {/* <div className="panel">
                  <button onClick={this.handleClick.bind(this)}>点我吧!</button>
                </div> */}
                <Button/>
                <div className="section">
                    {this.props.children}
                </div>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {}
}

module.exports = connect(mapStateToProps)(App)
