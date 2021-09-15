// Este va a ser un archivo de acciones, dentro del mismo voy a mandar a llamar a la API a través de redux-thunk 

const START_GET_POKEMONS = 'START_GET_POKEMONS';
const SUCCESS_GET_POKEMONS = 'SUCCESS_GET_POKEMONS';

const startGetPokemons = payload => ({
    type: START_GET_POKEMONS,
    ...payload
});

const successGetPokemons = payload => ({
    type: SUCCESS_GET_POKEMONS,
    ...payload
});  

// Ya tenemos las dos acciones que van a disparar hacia la store. Ahora viene lo interesante, vamos a crear el siguiente método:

export const fetchPokemons = () => {
    return dispatch => {
        dispatch(startGetPokemons()) // Esto lo que va a hacer es decirle a la store que ya comenzó a ejecutarse la tarea de traer pokemons

        // Nuestro siguiente paso es mandar a llamar la API a través de fetch, la cuál me va a traer los resultados : un listado de 10 pokemons.

        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res=> res.json()) // Convertimos la respuesta a json, ya que el formato no es legible aún 
        .then(resultado => { // Si resultado es correcto entonces disparamos la segundo acción
            dispatch(successGetPokemons(resultado)) // successGetPokemons, que va a tener como argumento el resultado
            // ya que en este caso si va necesitar ese payload. Esto le va a informar a la store que el resultado de traer pokemons de una API en la nube
            // ha sido exitosa  y le traemos el "payload" o la información. Los reducers son los que se van a encargar de terminar esta tarea 
            // Vamos a App para probar lo que acabamos de hacer de ste lado. 
        })
    }
}

// Esta función es la encargada de hacer la llamada a la API y la misma va a retornar otra función (un closure de js). Esta segunda función 
// va a tener como parametro el 'dispatch'. El 'dispatch' es el que va a ejecutar las dos acciones de arriba una vez que haya completado la tarea.
// La tarea: mandar a llamar a la API de pokemons (una api fake de un listado de pokemons). 

// Vamos a trabajar en colocar la lista dentro de react js, simplemente mostrar la información en el componente que estamos trabajando: App.