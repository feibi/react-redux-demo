import React, {Component} from 'react'
import ScrollView from './../../components/scrollView'
import "./list.scss"
class List extends Component {
    constructor(props) {
        super(props);
        this.loadMore = this.loadMore.bind(this);
        this.state={
            isLoading:false
        }
    }

    componentDidMount() {
        console.log('sss');

    }

    loadMore() {
        console.log('到达底部了');
        this.setState({
            isLoading: true
        })

    }


    render() {
        let scrollViewProps={
            loadMore:this.loadMore,
            isLoading:this.state.isLoading
        };

        return (
            <ScrollView {...scrollViewProps}>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>2</li>
            </ScrollView>
        )
    }
}


module.exports = List;
