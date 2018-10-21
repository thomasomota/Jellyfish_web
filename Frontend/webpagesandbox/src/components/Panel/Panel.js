//@flow
import React from 'react'
import './Panel.css'

type Props = {
}

class Panel extends React.Component<Props> {
    render(){
        const placeHolderImage = "http://ichef.bbci.co.uk/wwfeatures/wm/live/624_351/images/live/p0/50/fj/p050fjlr.jpg"
        return ( 
        <div className="panel">
          <img className="panel__image" src={placeHolderImage} alt="error"/>
          <div className="panel__textContainer"> 
              <h4 style={{"padding-bottom": "5px"}}><b>Panel Title</b></h4>
              <p>Panel text</p>
          </div>
        </div>
        )
    } 
}
 
export default Panel