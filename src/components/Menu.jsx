import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Menu extends Component {
    render(){
        return(
            <div id="menu" uk-offcanvas="mode: push; overlay: true">
                <div className="uk-offcanvas-bar ">
                    <button className="uk-offcanvas-close" type="button" uk-close=""></button>
                    <div className="uk-width-1-1 uk-margin-xlarge">
                        <ul className="uk-nav uk-nav-default " uk-nav="">
                        <li><NavLink to="/" uk-toggle="target: #menu">Home</NavLink></li>
                            {this.props.links.map((v)=><li key={v.id}><NavLink to={`/${v.url}`} uk-toggle="target: #menu">{v.categoria}</NavLink></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu