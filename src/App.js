import React, {useEffect}  from "react"; 

import {useSelector, useDispatch} from 'react-redux';

// useSelector te ayuda a extraer información del state de la store de Redux. useSelector es llamado cada vez que el componente hook se actualiza.
// Cuando una acción es disparada por el dispatch, useSelector compara el valor anterior con el siguiente , en caso de ser diferentes forza el re rendering. 

// Importamos useDispatch desde react-redux que es lo que utilizo para mandar acciones hacia la store de redux y que las va a interceptar el 
// middleware que acabo de instalar, redux-thunk. 

// También importamos useEffect desde React. Al usar este Hook, le estamos indicando a React que el componente tiene
// que hacer algo después de renderizarse. 

function App(props) {
  const dispatch = useDispatch(); // Referenciamos dispatch.

  useEffect(() => {
    // Acá vamos a llamar la acción a traves del dispatch
    
  })

  return (
    <div>
      
    </div>
  );
}

export default App;

// Dentro de redux vamos a crear una nueva carpeta llamada actions y dentro de la misma vamos a crear el archivo pokemon.js