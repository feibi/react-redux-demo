import React,{Component} from 'react'

import "./list.scss"
class List extends Component{
    constructor(props){
      super(props)
    }

    componentDidMount(){
      let scrollView=this.refs.scrollView;
      let viewHeight=window.innerHeight;
      let scrollTop=document.scrollTop;
      let contentHeight=document.body.offsetHeight;


      window.addEventListener("scroll",()=>{
        console.log(document.documentElement.scrollTop)
      })
      console.log('111',viewHeight,contentHeight)
    }

    render(){
      return (
        <div >
          <ul className="list" ref="scrollView">
            <li> row 1</li>
            <li> row 2</li>
            <li> row 3</li>
            <li>row 5</li>
            <li> row 5</li>
            <li> row 7</li>
            <li> row 8</li>
            <li> row 9</li>
            <li> row 11</li>
            <li> row 11</li>
            <li> row 12</li>
            <li> row 13</li>
            <li> row 14</li>
            <li> row 15</li>
            <li> row 16</li>
            <li> row 17</li>
            <li> row 18</li>
            <li> row 19</li>
            <li> row 20</li>
            <li> row 21</li>
            <li> row 22</li>
            <li> row 23</li>
            <li> row 24</li>
            <li> row 25</li>
            <li> row 26</li>
          </ul>
        </div>
      )
    }
}


module.exports=List;
