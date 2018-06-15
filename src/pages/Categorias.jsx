import React, { Component, Fragment } from "react"
import { Link } from 'react-router-dom'

class PageCategorias extends Component{
    render(){
        return(
            <Fragment>
                <h1>{this.props.cat.map(res=> res.categoria)}</h1>
                <div className="uk-grid uk-grid-match uk-child-width-1-1">
                    {this.props.prod.slice(0, 20).map((v)=>
                        <div key={v.id} className="uk-margin-bottom">
                            <Link to={`/${v.categoria.url}/${v.url}`} className="uk-link-reset">
                                <div className="uk-card uk-padding-remove bg-card uk-box-shadow-small uk-card-body uk-grid uk-grid-collapse" uk-grid="">
                                    <div className="uk-card-media-left uk-cover-container uk-width-1-3@s uk-width-1-3@m">
                                        <img src={`http://tambasa.com/fotos/${v.img}`} alt={v.codigo}/>
                                    </div>
                                    <div className="uk-padding uk-width-1-1@s uk-width-2-3@m">
                                        <h2 className="uk-margin-remove">
                                            {v.descricao}
                                        </h2>
                                        <p>{v.codigo}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>)
                    }
                </div>
            </Fragment>
        )
    }
}
export default PageCategorias