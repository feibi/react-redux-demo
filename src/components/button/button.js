import React, {Component} from 'react';

class Button extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {title,onClick} = this.props;

        return (
            <div>
                <button className="btn" onClick={onClick}>{title}</button>
            </div>
        )
    }
}

Button.defaultProps = {
    title: 'button'
}

export default Button;
