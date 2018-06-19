import React, { Component, Fragment } from "react"
import { Link } from 'react-router-dom'

function FiltraProdutos(listaProdutos){
    return function(x){
        return x.img.toLowerCase().includes(listaProdutos) || !listaProdutos
    }
}
class PageCategorias extends Component{
    constructor(){
        super()
        this.state = {
            pesquisa: ''
        }
        this.onCampoPesquisa = this.onCampoPesquisa.bind(this)
    }
    onCampoPesquisa(e){
        this.setState({
            pesquisa: e.target.value
        })
    }
    render(){
        return(
            <Fragment>
                <form action="">
                    <div className="uk-margin">
                        <input className="uk-input" type="number" 
                            ref="pesquisa" 
                            onChange={(event) => this.onCampoPesquisa(event)}
                            value={this.state.pesquisa} 
                            placeholder="Pesquisar..." />
                    </div>
                </form>
                <h1>{this.props.cat.map(res=> res.categoria)}</h1>
                <div className="uk-grid uk-grid-match uk-child-width-1-1">
                    {this.props.prod
                        .filter(FiltraProdutos(this.state.pesquisa) )
                        .slice(0, 20).map((v)=>
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