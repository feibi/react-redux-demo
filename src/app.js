/**
 * Created by zylee on 2016/10/20.
 */
import React from 'react'
//import {VelocityComponent,VelocityTransitionGroup} from 'velocity-react'
import Menu from './components/menu'
import Routes from './routes'


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

    render() {
        return (
            <div className="container">
                <Menu/>
                <Routes/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {}
}

export default App;