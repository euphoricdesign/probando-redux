import { createStore, applyMiddleware } from 'redux'; // importamos applyMiddleware
import thunk from 'redux-thunk'; // importamos middleware      

function reducers() { 
    return {
        nombre:'pedro'
    }
}

export default () => {
    return {
        ...createStore(reducers, applyMiddleware(thunk))
    }
}


// En nuestro archivo store es donde yo voy a conectar mi middleware recien instalado, redux-thunk

// Y además de createStore, tmb vamos a importar applyMiddleware de redux, que es una forma recomendada de aplicar middleware a la store de 
// mi proyecto. 

// applyMiddleware va a ser el segundo argumento de la función createStore()
// y como argumento le paso 'thunk'. De esta manera ya estoy aplicando middleware a la store de redux.

// Vamos a App