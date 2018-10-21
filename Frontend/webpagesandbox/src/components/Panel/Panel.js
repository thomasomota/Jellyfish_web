//@flow
import React from 'react'
import './Panel.css'

type Props = {
    imageUrl: string,
    title: string,
    text: string
}

class Panel extends React.Component<Props> {
    render(){

        const {imageUrl, title, text} = this.props;

        return ( 
        <div className="panel">
          <img className="panel__image" src={imageUrl} alt=""/>
          <div className="panel__textContainer"> 
              <h4 style={{"paddingBottom": "5px"}}><b>{title}</b></h4>
              <p>{text}</p>
          </div>
        </div>
        )
    } 
}
 
export default Panel