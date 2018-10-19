//@flow

import React from 'react'
import {Link} from 'react-router-dom'

type Props =  {
    history: Object
}

class Yolo extends React.Component<Props>{
    render(){
       return(
           <div>
            <h>YOLO</h>
            <Link to='/'> Home page</Link>
           </div>
        )
    }
}

export default Yolo