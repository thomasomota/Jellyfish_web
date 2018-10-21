//@flow
import React from 'react'
import withRouter from 'react-router-dom/withRouter';
import {NavLink} from 'react-router-dom'

import './NavigationBarItem.css'

type Props =  {
    navLink: string,
    children?: Node,
    activeClassName: string,
}

class NavigationBarItem extends React.Component<Props>{

    render(){

        const { navLink, children, activeClassName } = this.props
    
        const style = "navBar__link"

        return(
            <div className="navBar__item">
                <NavLink
                    to={navLink}
                    activeClassName={activeClassName}
                    className={style}
                    exact={true}
                >
                    {children}
                </NavLink>
            </div>
        )
    }
}

export default withRouter(NavigationBarItem)