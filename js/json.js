//let contenido=document.querySelector('#contenido');

function traer(){
    fetch('../js/bkids.json')
    .then(res =>res.json())
    .then(res=>{
        //console.log(res)
        //console.log(res.bicicletas[0].nombre)
        //var bicicletas = res;
        
        
        /*
        contenido.innerHTML=`<img src="${res.bicicletas[0].pathImg}" width="100px"
        class="img-fluid rounded-circle">
        <p>Nombre:${res.bicicletas[0].nombre}</p>
        <p>Precio: ${res.bicicletas[0].precio}</p>`
        */

        console.log(res.bicicletas.length);
        let bicis = res.bicicletas.length;
        console.log(bicis);

        for (let i = 0; i < bicis; i++) {
            //const element = array[index];
            contenido.innerHTML=`<img src="${res.bicicletas[i].pathImg}" width="100px"
            class="img-fluid rounded-circle"><
            <p>Nombre:${res.bicicletas[i].nombre}</p>
            <p>Precio: ${res.bicicletas[i].precio}</p>
            <p><br></p>`
        }

    })

}



traer();