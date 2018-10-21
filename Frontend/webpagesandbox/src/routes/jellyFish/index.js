//@flow

import React from 'react'
import * as Three from 'three'
import "./jellyFish.css"

type Props =  {
    history: Object
}

class JellyFishPage extends React.Component<Props>{
    
    componentDidMount() {
        
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight

        this.scene = new Three.Scene ()

        this.camera = new Three.PerspectiveCamera (
            75,
            width / height,
            0.1,
            1000
        )
        
        this.camera.position.z = 4

        this.renderer = new Three.WebGLRenderer({ antialias: true })
        this.renderer.setClearColor('#AAAAAA')
        this.renderer.setSize(width, height)
        this.mount.appendChild(this.renderer.domElement)

        const geometry = new Three.BoxGeometry(1, 1, 1)
        const material = new Three.MeshBasicMaterial({ color: '#433F81'     })
        this.cube = new Three.Mesh(geometry, material)
        this.scene.add(this.cube)

        this.start()
    }

    componentWillUnmount(){
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
      }

    start = () => {
        if (!this.frameId) {
          this.frameId = requestAnimationFrame(this.animate)
        }
      }

    stop = () => {
        cancelAnimationFrame(this.frameId)
      }

    animate = () => {
       this.cube.rotation.x += 0.02
       this.cube.rotation.y += 0.02
       this.renderScene()
       this.frameId = window.requestAnimationFrame(this.animate)
     }

    renderScene = () => {
      this.renderer.render(this.scene, this.camera)
    }
  
    render(){

       return(
        <div
        className="canvas" 
        ref={(mount) => { this.mount = mount }}
        />
        )
    }
}

export default JellyFishPage