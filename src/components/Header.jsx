import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './logo.svg'

class Menu extends Component {
    render(){
        return(
            <header className="bg-gradiente uk-light" uk-sticky="show-on-up: true; animation: uk-animation-slide-top; cls-active: uk-navbar-sticky uk-box-shadow-small;">
                <nav className="uk-container" uk-navbar="">
                    <div className="uk-navbar-left">
                        <NavLink to="/" className="uk-navbar-item" >
                            <img className="uk-logo" src={logo} alt=""/>
                        </NavLink>
                    </div>
                    <div className="uk-navbar-right" >
                        <span uk-icon="icon: menu; ratio:1.5" className="uk-padding" uk-toggle="target: #menu"></span>
                        
                    </div>
                </nav>
            </header>
        )
    }
}
export default Menu