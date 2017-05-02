import React from 'react'
import {render} from 'react-dom'
//import {Link, IndexLink} from 'react-router'
import {Link} from 'react-router-dom'
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
                <Link to="/">首页</Link>
                <Link to="/about">关于我们</Link>
                <Link to="/contact">联系我们</Link>
                <Link to="/list">列表</Link>
            </div>

        )
    }
}

export default Menu;
