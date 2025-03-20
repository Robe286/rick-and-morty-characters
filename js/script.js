// Revisamos la documentación de la API para hacer hacernos una idea de que tiene y como funciona.
//Primero vamos a ver que nos trae fetch()
/*
Esta petición nos responde con la primera página, que contiene un array de 20 objetos.
La Api tiene agrupados los personajes en 42 páginas*/

//Siguiente: habra que meter esos 20 objetos como elementos de la lista.
//Capturar el id de la lista para meterlos ahi

const characterList = document.getElementById('character-list');
console.log(characterList);

/*Meter cada personaje como elemento de la lista. Cada personaje esta agrupado en un array de objetos,
y dentro de cada objeto están los datos de cada uno. 
*/

//Nesesito traer los datos y meterlos en la lista:
fetch('https://rickandmortyapi.com/api/character')//Traemos los datos
    .then(response => response.json())
    .then(data => console.log(data));