/**
 * Created by zylee on 2017/4/13.
 */
import React, { Component } from 'react'

class Bundle extends Component {
    state = {
        // short for "module" but that's a keyword in js, so "mod"
        mod: null
    }

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        this.setState({
            mod: null
        });
        props.load((mod) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            })
        })
    }

    render() {
        return this.state.mod ? this.props.children(this.state.mod) : null
    }
}

export default function lazyLoad(module){

    return function (props) {
        return (
            <Bundle load={module}>
                {(Comp) => Comp?<Comp {...props}/>:<div>loading</div>}
            </Bundle>
        )
    }
}