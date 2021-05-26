const formulario = document.getElementById('formulario')
//const inputs = document.querySelectorAll('#formulario input')


formulario.addEventListener('submit', (e) =>{

    if(formulario.Name.value === '' || formulario.Name.value == null){
        e.preventDefault()
        alert('Debes escribir tu nombre')
    }

    else if(formulario.Email.value === '' || formulario.Email.value == null) {
        e.preventDefault()
        alert('Debes escribir tu Correo Electronico')
    }

    else if(formulario.Phone.value === '' || formulario.Phone.value == null) {
        e.preventDefault()
        alert('Debes escribir tu Numero de Contacto')
    }

})
