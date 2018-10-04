//@flow

import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';
import FrontPage from './frontPage' 
import Yolo from './yolo'
import {uiHeader} from '../components'

type Props =  {
    history: Object
}

class Routes extends React.Component<Props>{
    render(){
       return(
           <div>
               <uiHeader/>
               <br></br>
                <Switch>
                    <Route exact path = "/" component = {FrontPage}></Route>
                    <Route exact path = "/yolo" component = {Yolo}></Route>
                </Switch>
           </div>
        )
    }
}

export default withRouter(Routes)