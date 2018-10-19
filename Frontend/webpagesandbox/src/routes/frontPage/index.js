//@flow

import React from 'react'

type Props =  {
    history: Object
}

class FrontPage extends React.Component<Props>{
    render(){
       return(
           <div>
            <h>Hello world frontpage yey</h>
            <p>
                There is a lot of things bla bla 
            </p>
            </div>
        )
    }
}

export default FrontPage