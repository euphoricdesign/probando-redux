import React from "react";
// Vamos a hacer un import de un modulo de react-redux: {useSelector}. 

// useSelector es una función que toma el estado actual como argumento y devuelve los datos que desee de él. Es muy similar
// a mapStateToProps() y le permite almacenar los valores devueltos dentro de una variable dentro del alcance de sus
// componentes funcionales en lugar de pasar como accesorios.

// Use selector recibe un callback y trae el resultado de la store o el state global de la store 


import {useSelector} from 'react-redux';

function App(props) {
  const data = useSelector(state => {
    console.log(state) // Esto nos retorna {} un objeto vacío efectivamente, ya que es lo que nos devuelve la funcion reducer. 
  })
  return (
    <div>
      
    </div>
  );
}

export default App;


// De esta manera vemos que nuestro proyecto ya se encuntra conectado a la store de redux y como ya lo mencionamos los reducer son los que van
// a actualizar su estado. 
