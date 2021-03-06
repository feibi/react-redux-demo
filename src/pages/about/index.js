import React from 'react'
import {connect} from 'react-redux'
// import QueueAnim from
// 'rc-queue-anim';
import Message from './../../components/Message'
import Button from './../../components/button';
import {Link} from 'react-router-dom'
const message = Message.newInstance({});

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    message.create({
      duration: 2, content: <span>I'm a message</span>,
      onClose() {}
    })
  }

  showMessage = () => {
    message.create({
      duration: null, content: <span>I'm a closable message</span>,
      closable: true,
      onClose() {}
    })
  }

  toMessage = () => {
    message.create({
      duration: null, key: 'sss', content: <span>I'm a closable message<Button
        onClick={this.customClose.bind(null, 'sss')}/></span>,
      onClose() {}
    })
  }

  customClose = (key) => {
    message.removeMessage(key);
  }

  componentDidMount() {}

  componentWillUnmount() {
    //message.destroy()
  }

  render() {
    return (
      <div
        key='0'
        className="about">
        <div className="panel">
          <Button
            title="默认自动关闭"
            onClick={this.handleClick}/>
        </div>
        <div className="panel">
          <Button
            title='默认手动关闭'
            onClick={this.showMessage}/>
        </div>
        <div className="panel">
          <Button
            title="自定义关闭"
            onClick={this.toMessage}/>
        </div>
        <div>
          <Link to='/no-match'>no match</Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}
export default connect(mapStateToProps)(About)
