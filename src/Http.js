import Axios from 'axios'

const http = {
    loadCategorias: () => Axios.get('/db/categorias.json'), 
    loadSubCategorias: () => Axios.get('/db/subcategorias.json'), 
    loadProdutos: () => Axios.get('/db/produtos.json')
}
export default http