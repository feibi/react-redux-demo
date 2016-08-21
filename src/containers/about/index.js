import React from 'react'
import { Route } from 'react-router'
import { render } from 'react-dom'

class About extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    return (
      <div className="about">
        abouts

        {this.props.children}
      </div>
    )
  }
}

export default About
