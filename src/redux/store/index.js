// Lo primero que hacemos es importar un método que viene dentro del paquete de redux: {createStore}. El mismo nos
// crea la Store en nuestro proyecto.

import { createStore } from 'redux';

function reducers() { // Función para simular un reducer. Los reducers regresan un objeto.
    return {
        nombre:'pedro'
    }
}

// Como a este archivo lo vamos a importar dentro de nuestros componentes para crear la store, vamos a exportar una arrow function 
// y que simplemente va a regresar un object. 
// En este object simplemente vamos a mandarle ...createStore(), al mandar a llamar a este método automaticamente se 
// va a crear nuestra store. Este método recibe dos parametros, el primer parametro son los reducers  y el segundo parametro
// son argumentos adicionales que vemos más adelante

export default () => {
    return {
        ...createStore(reducers)
    }
}


// ¿Por qué exportamos una función y por qué la misma retorna un objeto con el método createStore? 

// Para que dentro del archivo principal/root de mi proyecto mande a impotar este archivo como storeFunction y me ejecute directamente el método 
// createStore(), el cuál estoy regresando como un objeto ya que dentro de este proyecto vamos a trabajar con middlewares y necesita ser de esta manera.