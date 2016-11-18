import React, {Component} from 'react';

class Button extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {title} = this.props;

        return (
            <div>
                <button className="btn">{title}</button>
            </div>
        )
    }
}

Button.defaultProps = {
    title: 'button'
}

module.exports = Button;
