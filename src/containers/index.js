/**
 * Created by zylee on 2016/10/20.
 */
import React from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import {VelocityComponent,VelocityTransitionGroup} from 'velocity-react'
import Menu from './menu/'
// require('velocity-animate');
require('velocity-animate/velocity.ui');
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={
          showSubComponent:true
        }
      //  this.handleClick.bind(this)
    }
    handleClick(e){
      this.setState({
        showSubComponent:!this.state.showSubComponent
      })
    }

    render() {
        return (
            <div className="container">
                <Menu/>
                <div className="panel">
                  <button onClick={this.handleClick.bind(this)}>点我吧!</button>
                </div>
                <div className="section">
                    <VelocityTransitionGroup runOnMount={false} enter={{animation: "slideDown",duration:300}} leave={{animation: "slideUp",duration:300}}>
                      {this.state.showSubComponent ? this.props.children : undefined}

                    </VelocityTransitionGroup>

                    <VelocityComponent animation={{ opacity: this.state.showSubComponent ? 1 : 0 }} duration={500}>
                          {this.props.children}
                    </VelocityComponent>
                </div>
            </div>
        )
    }
}
module.exports = connect()(App)
