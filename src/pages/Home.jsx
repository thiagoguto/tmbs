import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class PageHome extends Component{
    render(){
        return(
        <div className="uk-grid uk-grid-match uk-child-width-1-1">
            <div className="uk-margin-bottom"><NavLink to="/" className="uk-link-reset"><div className="uk-card bg-card uk-box-shadow-small uk-card-body"><h2 className="uk-margin-remove">Home</h2></div></NavLink></div>
            {this.props.cat.map((v)=>
                <div key={v.id} className="uk-margin-bottom">
                    <NavLink to={`/${v.url}`} className="uk-link-reset">
                        <div className="uk-card bg-card uk-box-shadow-small uk-card-body">
                            <h2 className="uk-margin-remove">
                                {v.categoria}
                            </h2>
                        </div>
                    </NavLink>
                </div>)
            }
        </div>
        )
    }
}
export default PageHome