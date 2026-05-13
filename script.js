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