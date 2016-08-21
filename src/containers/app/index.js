import React from 'react'
import { render} from 'react-dom'
import { Route, IndexRoute, Link } from 'react-router'
import {connect} from 'react-redux'
import About from '../about/'

class App extends React.Component {
  constructor(props) {

    super(props)
  }

  render(){
    return (
      <div className="main">
        <div>
          <Link to="/">  app </Link>
          <Link to="/about"> about</Link>
          <Link to="/contact"> contact</Link>
          <About/>
        </div>
      </div>


    )
  }
}
module.exports=connect()(App)

