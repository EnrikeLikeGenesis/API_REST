fetch("https://rickandmortyapi.com/api/character")
.then(respuesta => respuesta.json())
.then(datos => {
    console.log (datos);
datos.results.forEach(personaje => {
document.getElementById("personajes").innerHTML += `
        <div class="col-md-3 mb-4">
            <div class="card">
                <img src="${personaje.image}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">
                    ${personaje.name}
                    </h5>
                    <p>
                    ${personaje.species}
                    </p>
                    <p>
                    ${personaje.status}
                    </p>
                </div>
            </div>
        </div>
        `;
    });

 
    
});


function GenerarPersonaje(){
let NumeroAleatorio=Math.floor(Math.random() * 20);
fetch("https://rickandmortyapi.com/api/character")
.then(respuesta => respuesta.json())
.then(datos => {
    document.getElementById("nombre").innerText=datos.results[NumeroAleatorio].name;
    document.getElementById("id_personaje").innerText=datos.results[NumeroAleatorio].id;
    document.getElementById("Especie").innerText=datos.results[NumeroAleatorio].species;
    document.getElementById("Estado").innerText=datos.results[NumeroAleatorio].status;
    document.getElementById("imagen").src=datos.results[NumeroAleatorio].image;
    });

}