import React from 'react'
import {render} from 'react-dom'
import QueueAnim from 'rc-queue-anim';

import Button from './../../components/button/button'
class About extends React.Component {
    constructor(props) {
        super(props);

    }
    handleClick(e) {
        // this.setState({
        //     showSubComponent: !this.state.showSubComponent
        // })
    }

    render() {
        return (

            <QueueAnim animConfig={{
                opacity: [
                    1, 0
                ],
                translateX: [0, -30]
            }}>
                <div key='0' className="about">

                    abouts
                    <div className="panel">
                        <Button onClick={this.handleClick.bind(this)}/>
                    </div>
                </div>
            </QueueAnim>

        )
    }
}

export default About
