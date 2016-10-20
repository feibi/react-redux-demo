import React from 'react'
import {render} from 'react-dom'
import {Link, IndexLink} from 'react-router'
import {connect} from 'react-redux'
class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="menu">
                <IndexLink to="/" activeClassName="active"> app </IndexLink>
                <Link to="/about" activeClassName="active"> about</Link>
                <Link to="/contact" activeClassName="active"> contact</Link>
            </div>


        )
    }
}
module.exports = Menu;

