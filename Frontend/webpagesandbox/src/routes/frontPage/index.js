//@flow

import React from 'react'
import Panel from '../../components/Panel/Panel'
import './frontPage.css'

type Props =  {
    history: Object
}

class FrontPage extends React.Component<Props>{
    render(){

        const imageUrl = "http://ichef.bbci.co.uk/wwfeatures/wm/live/624_351/images/live/p0/50/fj/p050fjlr.jpg"
    
        return(
        <div className="panels__container">
            <Panel imageUrl={imageUrl} title="Project 1" text="description"/>
            <Panel imageUrl={imageUrl} title="Project 2" text="description"/>
            <Panel imageUrl={imageUrl} title="Project 3" text="description"/>
        </div>
        )
    }
}

export default FrontPage

