function traedata(data) {
  fetch(`js/${data.nombre}.json`)
    .then((response) => {
      return response.json();
    })
    .then((jsondatos) => {
      document.getElementById(`${data.id}`).innerHTML = jsondatos
        .map(
          (dato) =>
            `<div class="col-lg-4 col-md-6 mb-3">
            <div class="card mb-3 h-100">
                <img src=${dato.img1} class="card-img-top" alt=${dato.nombre} width="100%" height="300">
                <div class="card-body">
                    <h5 class="card-title">${dato.nombre}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${dato.eslogan}</h6>
                    <p class="card-text">
                    ${dato.descripcion}
                    </p>
                </div>
            </div>
        </div>`
        )
        .join("");
    })
    .catch((error) => {
      console.log(error);
    });
}

if (document.getElementById("Empre")) {
  traedata({ id: "Empre", nombre: "emprendimientos" });
} else if (document.getElementById("Expe")) {
  traedata({ id: "Expe", nombre: "experimentos" });
}
