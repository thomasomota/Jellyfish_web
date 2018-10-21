//@flow

import React from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'
import "./jellyFish.css"

type Props =  {
    history: Object
}

class JellyFishPage extends React.Component<Props>{
    
    constructor(props){
        super(props)
        this.state = {
            cubeRotation: new THREE.Euler()
        }
    }

    componentDidMount(){
        this.cameraPosition = new THREE.Vector3(0,0,10)
        this._onAnimate = () => {
            this.setState({
                cubeRotation: new THREE.Euler(
                this.state.cubeRotation.x + 0.01,
                this.state.cubeRotation.y + 0.01,
                0)
            })
        }
    }
  
    render(){
        const width = window.innerWidth / 4; // canvas width
        const height = window.innerHeight / 4; // canvas height
        const type = this.props.type;
    
    return (
      <React3
        mainCamera="camera"
        width={width}
        height={height}
        clearColor={0x0c2340}
        alpha={true}
        clearAlpha={0}
        onAnimate={this._onAnimate}
      >
        <scene>
          <perspectiveCamera
            name="camera"
            fov={75}
            aspect={width / height}
            near={0.1}
            far={1000}
            position={this.cameraPosition}
          />
          <mesh rotation={this.state.cubeRotation}>
            <boxGeometry width={3} height={3} depth={3} />
            <meshLambertMaterial color={0xF3FFE2} />
          </mesh>
          <ambientLight intensity={.6} />
          <pointLight 
            color={0xFFFFFF}
            distance={10000} 
            position={new THREE.Vector3(3, 3, 3)} 
          />
        </scene>
      </React3>
        )
    }
}

export default JellyFishPage