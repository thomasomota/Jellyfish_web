//@flow

import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';
import FrontPage from './frontPage' 
import Yolo from './yolo'
import NavigationBar from '../components/Navigation/NavigationBar';
import './index.css'

type Props =  {
    history: Object
}

class Routes extends React.Component<Props>{
    render(){
       return(
           <div className="pageContainer">
                <NavigationBar/>
                <div className="contentContainer">
                    <Switch>
                        <Route exact path = "/" component = {FrontPage}></Route>
                        <Route path = "/yolo" component = {Yolo}></Route>
                    </Switch>
                </div>
           </div>
        )
    }
}

export default withRouter(Routes)