import React, {Component} from 'react'


class ScrollView extends Component{
    constructor(props){
        super(props);
        this.listenerScroll = this.listenerScroll.bind(this);
        this.state={
            loading:false
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.listenerScroll);

        console.log('scroll');
    }
    componentWillUnmount(){
        //移除监听
        //window.removeEventListener('scroll', this.ListScroll);
    }
    listenerScroll(e) {
        let {loadMore,isLoading}=this.props;
        var scrollTop = document.body.scrollTop;
        var offsetHeight = document.documentElement.clientHeight;
        var scrollHeight = document.body.scrollHeight;
        let offsetTop=0;
        if (scrollTop+offsetHeight-scrollHeight+offsetTop>= 0 ) {

            // this.setState({
            //     loading:true
            // });
            if(!isLoading){
                loadMore&&loadMore()
            }

           // console.log('11',scrollHeight,offsetHeight)
        }

    }
    render(){
        let {loading}=this.state;

        return (
            <div className="scroll-wrap">
                {this.props.children}
                {loading&&<span>正在加载...</span>}
            </div>
        )
    }
}

export default ScrollView