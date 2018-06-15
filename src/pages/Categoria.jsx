import React, { Component } from "react"
import { Link } from 'react-router-dom'

class PageCategoria extends Component{
    render(){
        return(
            <div>
                {this.props.prod.map(v=>
                    <div key={v.id} className="uk-margin-bottom">
                            <div className="uk-card uk-padding-remove bg-card uk-box-shadow-small uk-card-body uk-grid uk-grid-collapse" uk-grid="">
                                <div className="uk-card-media-left uk-cover-container uk-width-1-3@s uk-width-1-3@m uk-flex uk-flex-center">
                                    <img src={`http://tambasa.com/fotos/${v.img}`} alt={v.codigo}/>
                                </div>
                                <div className="uk-padding uk-width-1-1@s uk-width-2-3@m">
                                    <h1 className="uk-margin-remove">
                                        {v.descricao}
                                    </h1>
                                    <label className="uk-label"> {v.codigo}</label>
                                    <p>Categoria: <Link className="uk-link-reset" to={`/${v.categoria.url}`}>{v.categoria.nome}</Link><br/>
                                    Subcategoria: {v.subcategoria.nome} <br/>
                                    Comprador: {v.comprador}<br />
                                    Esta no catalogo? {v.catalogo} </p>
                                </div>
                            </div>
                    </div>
                )}
            </div>
        )
    }
}
export default PageCategoria