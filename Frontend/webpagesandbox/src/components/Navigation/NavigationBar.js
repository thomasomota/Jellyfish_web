//@flow
import React from 'react'
import './NavigationBar.css'
import { NavLink } from 'react-router-dom';
import NavigationBarItem from './NavigationBarItem';

type Props = {
}

class NavigationBar extends React.Component<Props> {

    render(){
        return ( 
        <div className="navigationBar">
          <NavigationBarItem navLink="/" activeClassName="navBar__item--active" >
            Home
          </NavigationBarItem>
          <NavigationBarItem navLink="/YOLO" activeClassName="navBar__item--active">
            Yolo
          </NavigationBarItem>
        </div>
        )
    } 
}
 
export default NavigationBar