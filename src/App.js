import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PageHome from './pages/Home'
import PageCategorias from './pages/Categorias' 
import PageCategoria from './pages/Categoria' 
import Menu from './components/Menu'
import Header from './components/Header'
import http from './Http';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      categorias: [],
      subCategorias: [],
      produtos: []
    }
  }
  componentWillMount(){
    http.loadCategorias()
    .then((res)=>{
      this.setState({
        categorias: res.data.categorias
      })
    })
    http.loadSubCategorias()
    .then((res)=>{
      this.setState({
        subCategorias: res.data.subcategorias
      })
    })
    http.loadProdutos()
    .then((res)=>{
      this.setState({
        produtos: res.data.produtos
      })
    })
  }
  render() {
    return (
      <Router>
      <div className="uk-offcanvas-content">
        <Header links={this.state.categorias}/>
        <div className="uk-padding-small">
          <section className="uk-section uk-section-xsmall">
            <div className="uk-container">
              <Switch>
                <Route exact path="/" render={({match})=> <PageHome 
                  cat={this.state.categorias} /> }/>
               
                
                <Route exact path="/:categorias" render={({match})=> <PageCategorias
                  prod={this.state.produtos.filter((res)=>{return res.categoria.url === match.params.categorias})}
                  cat={this.state.categorias.filter((cat)=>{return cat.url === match.params.categorias})}
                  vv={match} /> }/>

                <Route exact path="/:categorias/:url" render={({match})=> <PageCategoria 
                  prod={this.state.produtos.filter((res)=>{return res.url === match.params.url})} /> }/>

                
              </Switch>
            </div>
          </section>
        </div>
        <Menu links={this.state.categorias} />
      </div>
      </Router>
    )
  }
}

export default App
