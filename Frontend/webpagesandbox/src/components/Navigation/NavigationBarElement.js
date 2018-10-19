/*//@flow
import React from 'react'
import withRouter from 'react-router-dom/withRouter';
import {NavLink} from 'react-router-dom'

import './NavigationBar.css'

type Props =  {
    navLink: string,
    children?: Node,
    onClick?: () => void
}

class NavigationBarElement extends React.Component<Props>{

    render(){

        const { navLink, children, onClick } = this.props
    
        return(
            <div className="navBar_item">
                <NavLink
                    to={navLink}
                    activeStyle={{color:"red"}}
                    className={"navBar_link"}
                    onClick={onClick}
                />
                {children}
            </div>
        )
    }
}

export default withRouter(NavigationBarElement)*/