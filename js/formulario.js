

function enviarFormulario(){
        const form = document.querySelector('#tiendaForm')
        
        form.addEventListener('submit', handleSubmit)

        async function handleSubmit(event){
            event.preventDefault()
            const formAux = new FormData(this)
            const response = await fetch(this.action, {
                method: this.method,
                body: formAux,
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (response.ok)
            {
                this.reset()
                alert('Gracias por enviarnos tu consulta, a la brevedad será reseulta')
            }
        }
}



    document.addEventListener("DOMContentLoaded", function(){
   document.getElementById("tiendaForm").addEventListener('submit', validarFormulario)});

    function validarFormulario(event) {
        event.preventDefault();
        var nombre = document.getElementById('nombre').value;
        if (nombre.length == 0) {
            alert('No has escrito nada en el nombre');
            return;
        }
        var apellido = document.getElementById('apellido').value;
        if (apellido.length == 0) {
            alert('No has escrito nada en el apellido');
            return;
        }

        const emailRe=/^[a-zA-Z0-9\.-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
        const email2Re=/^[a-zA-Z0-9\.-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}[.][a-zA-Z]{2,4}$/;
        var emaiL = document.getElementById('email').value;
        if(emailRe.test(emaiL)||email2Re.test(emaiL)){
            //alert('done');
            //return;
        }else{
            alert('Ingrese un mail valido');
            return;
        }

        var genChecked = document.querySelector('input[name="genero"]:checked');
        if (genChecked){

        }else{
            alert('No hay ningun elemento activo');
            return;
        }

        const comentarioRe=/^[a-zA-Z-\s\S]{10,200}$/
        var comentarioT = document.getElementById('comentario').value;
        if(comentarioRe.test(comentarioT)){
        }else{
            alert('Escriba un comentario mayor a 10 caracteres y menor a 200 caracteres');
            return;
        }

        if(comentarioT.length == 0){
            alert('Escriba un comentario');
            return;
        }

        this.submit();

    }

