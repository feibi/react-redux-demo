import React from 'react'
import {render} from 'react-dom'
import QueueAnim from 'rc-queue-anim';
class About extends React.Component {
    constructor(props) {
        super(props);

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
                </div>
            </QueueAnim>

        )
    }
}

export default About
