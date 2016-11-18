import React from 'react'
import {render} from 'react-dom'
import {Link, IndexLink} from 'react-router'
import {connect} from 'react-redux'
/**
 * style
 */
import './menu.scss'

class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="menu">
                <IndexLink to="/" activeClassName="active">
                    首页
                </IndexLink>
                <Link to="/about" activeClassName="active">
                    关于我们</Link>
                <Link to="/contact" activeClassName="active">
                    联系我们</Link>
            </div>

        )
    }
}
module.exports = Menu;
