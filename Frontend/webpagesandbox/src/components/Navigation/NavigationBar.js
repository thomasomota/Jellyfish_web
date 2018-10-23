//@flow
import React from 'react'
import './NavigationBar.css'
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
          <NavigationBarItem navLink="/jellyfish" activeClassName="navBar__item--active">
            JellyFish
          </NavigationBarItem>
        </div>
        )
    } 
}
 
export default NavigationBar