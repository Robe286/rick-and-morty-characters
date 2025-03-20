// Revisamos la documentación de la API para hacer hacernos una idea de que tiene y como funciona.
//Primero vamos a ver que nos trae fetch()
/*
Esta petición nos responde con la primera página, que contiene un array de 20 objetos.
La Api tiene agrupados los personajes en 42 páginas*/

//Siguiente: habra que meter esos 20 objetos como elementos de la lista.
//Capturar el id de la lista para meterlos ahi

const characterList = document.getElementById('character-list');
let prevPage = document.getElementById('prev-page');
let nextPage = document.getElementById('next-page');


/*Meter cada personaje como elemento de la lista. Cada personaje esta agrupado en un array de objetos,
y dentro de cada objeto están los datos de cada uno. 
*/

//Nesesito traer los datos y meterlos en la lista:
fetch('https://rickandmortyapi.com/api/character/?page=1')//Traemos los datos, con los datos aqui con foreach() recorremos el array y en cada pasada de alguna forma daremos órden de que los vaya metiendo, como elementos de la lista.
    .then(response => response.json())
    .catch((error) => {
        characterList.innerText = 'Error: No se pudieron obtener los personajes';
    })
    .then((data) => {
        characterList.innerHTML = ""
        data.results.forEach(personaje => {
            characterList.innerHTML +=`
            <li>
                <div>
                    <img src=${personaje.image} alt ${personaje.name}/>
                    <h2>Name: ${personaje.name}</h2>
                    <p>Specie: ${personaje.species}
                </div>
            </li>
            `
        });
})

//A continuación con los botones capturados, paginamos:

nextPage.addEventListener('click', () => {
    fetch('https://rickandmortyapi.com/api/character/?page=2') //Hay que generar +1 ¿Como?, dentro de una función....? 
    .then(response => response.json())
    .catch((error) => {
        characterList.innerText = 'Error: No se pudieron obtener los personajes';
    })
    .then((data) => {
        characterList.innerHTML = ""
        data.results.forEach(personaje => {
            characterList.innerHTML +=`
            <li>
                <div>
                    <img src=${personaje.image} alt ${personaje.name}/>
                    <h2>Name: ${personaje.name}</h2>
                    <p>Specie: ${personaje.species}
                </div>
            </li>
            `
        });
   })
})

/*let paginaActual = 1 
function avanzarPagina() {
    paginaActual = paginaActual +1;
    renderizar();
}
avanzarPagina();*/
