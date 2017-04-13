import React from 'react'
//import {Route, IndexRoute} from 'react-router'
import {
  //BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Bundle from './bundle'
import App from './index'
import About from './containers/about/'
import FindRoom from './containers/findRoom/'
import Welcome from './containers/welcome/'
import List from './containers/list/'

const Routes = ()=>(
  <Switch>
    <Route path="/" exact component={()=>(
      <Bundle load={Welcome}>
          {(Comp) => Comp?<Comp/>:<div>loading</div>}
      </Bundle>
    )}/>
    <Route path="/contact" component={()=>(
        <Bundle load={FindRoom}>
            {(Comp) => Comp?<Comp/>:<div>loading</div>}
         </Bundle>
    )}/>
    <Route path="/about" component={()=>(
        <Bundle load={About}>
            {(Comp) => Comp?<Comp/>:<div>loading</div>}
        </Bundle>
    )}/>
    <Route path="/list" component={()=>(
        <Bundle load={List}>
            {(Comp) => Comp?<Comp/>:<div>loading</div>}
        </Bundle>
    )}/>
  </Switch>

)

export default Routes
