//@flow
import React from 'react'
import './NavigationBar.css'
import { NavLink } from 'react-router-dom';

type Props = {
}

class NavigationBar extends React.Component<Props> {

    render(){
        return ( 
        <nav>
        <ul>
          <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/YOLO'>About</NavLink></li>
        </ul>
        </nav>
        )
    } 
}
 
export default NavigationBar
/*
<div className="navBar">
              <div className="navBar__item">
                <NavLink exact className="navBar__item" activeClassName="current" to="/">
                  Home
                </NavLink>
              </div>
              <div className="navBar__item">
                <NavLink exact className="navBar__item" activeClassName="current" to="/YOLO">
                  Yolo
                </NavLink>
              </div>
            </div>*/