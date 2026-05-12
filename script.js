fetch("https://rickandmortyapi.com/api/character")
.then(respuesta => respuesta.json())
.then(datos => {
console.log(datos);   
});