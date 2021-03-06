import React from 'react'
import {withRouter} from 'react-router'
import QueueAnim from 'rc-queue-anim';
import './index.scss'

//@withRouter
class Contact extends React.Component {
    constructor(props) {
        super(props)

    }
    handleClick() {
        console.log('点了');
    }
    render() {

        return (
            <div className="container-filter">

                <QueueAnim type={['bottom', 'top']} interval={80}>
                    <div key='0' className="item-filter">
                        <span>区域</span>
                        <span className="select-value">flalskdf;las asdlk</span>
                    </div>
                    <div key='1' className="item-filter">
                        <span>█</span>
                        <span className="select-value">d jjj lk</span>
                    </div>
                    <div key='2' className="item-filter">
                        <span>租金</span>
                        <span className="select-value"> k df; las asdffggf gh</span>
                    </div>
                    <div key='3' className="item-filter">
                        <span>租房类型</span>
                        <span className="select-value">asdffggf asdfsdf</span>
                    </div>
                </QueueAnim>

            </div>
        )
    }
}

export default Contact
