//@flow

import React from 'react'
import Panel from '../../components/Panel/Panel'
import './frontPage.css'

type Props =  {
    history: Object
}

class FrontPage extends React.Component<Props>{
    render(){
       return(
        <div className="panels__container">
            <Panel/>
            <Panel/>
            <Panel/>
        </div>
        )
    }
}

export default FrontPage

