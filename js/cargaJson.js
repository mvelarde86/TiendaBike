// Obtenemos los datos de todos las bicicletas
fetch('../js/bkids.json')
        .then(response => response.json())
        .then(json => {
            printBicicletas(json.bicicletas);
        });

// Pinta todos las bicicletas insertando un HTML dentro del #container
function printBicicletas(bicicletas) {
    console.log(bicicletas);
  const container = document.getElementById('container')
  bicicletas?.forEach(bicicleta => {
container.innerHTML = `
    ${container.innerHTML}

    <div class="Producto">                       
        <div class="img">
            <img src="${bicicleta.pathImg}" alt="producto1">
        </div>
        <div class="des">
            <p>${bicicleta.nombre}</p>
        </div>
        <div class="precio">
            <span>${bicicleta.precio}</span>
        </div>
        <div class="info">
            <a href="${bicicleta.pathPdf}">INFO</a>
        </div>
    </div>
    
  `;
  });
}