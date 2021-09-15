import React, { useEffect, useState }  from "react"; 
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from './redux/actions/pokemon'

function App(props) {
  const dispatch = useDispatch(); // Referenciamos dispatch.
  const [pokemons, setPokemons] = useState([]) // Declaramos una variable de estado llamada pokemons. 

  useEffect(() => {
    // Acá vamos a llamar la acción a traves del dispatch
    if (pokemons.length === 0) { 
      dispatch(fetchPokemons) // Este dispatch es del front, es del componente y al dispararlo me manda a llamar la función que acabamos de declarar en
      // pokemon.js, que esta utilizando thunk.
      // Entonces cuando fetchPokemons es llamada no es ejecutada por redux es ejecutado por el middleware, que es la función que retorna fetchPokemon
      setPokemons([{},{}]) // Para evitar ciclarnos por aquí, ya que de momento no vamos a crear ningun reducer 
    }
  })

  return (
    <div>
      
    </div>
  );
}

export default App;

// Dentro de redux vamos a crear una nueva carpeta llamada actions y dentro de la misma vamos a crear el archivo pokemon.js