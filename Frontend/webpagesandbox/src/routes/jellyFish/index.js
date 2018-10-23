//@flow

import React from 'react'
import * as THREE from 'three'
import "./jellyFish.css"
import threeEntryPoint from '../../threejs/threeEntryPoint'

type Props =  {
    history: Object
}

class JellyFishPage extends React.Component<Props>{
  
    componentDidMount() {
        threeEntryPoint(this.threeRootElement);
      }

    render () {
      return (
        <div className="jellyfish__canvas" ref={element => this.threeRootElement = element} />
      );
    }
}

export default JellyFishPage