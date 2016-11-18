import React from 'react'
import {render} from 'react-dom'
import QueueAnim from 'rc-queue-anim';
import './index.scss'

class FindRoom extends React.Component {
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
                        <span className="select-value">区域/地铁 二选一</span>
                    </div>
                    <div key='1' className="item-filter">
                        <span>地铁</span>
                        <span className="select-value">区域/地铁 二选一</span>
                    </div>
                    <div key='2' className="item-filter">
                        <span>租金</span>
                        <span className="select-value">请选择租金</span>
                    </div>
                    <div key='3' className="item-filter">
                        <span>租房类型</span>
                        <span className="select-value">请选择类型</span>
                    </div>
                </QueueAnim>

            </div>
        )
    }
}

export default FindRoom
