let i = 1;
function handleSubmit(event){
    event.preventDefault();
    let respuesta = document.createElement('h2');
    if (document.querySelector('h2'))
        document.querySelector('h2').remove();
    if (i==1){
        respuesta.textContent = 'Apretaste el boton' + ' ' + i + ' ' + 'vez';
    }
    else{
        respuesta.textContent = 'Apretaste el boton' + ' ' + i + ' ' + 'veces';
    }
    event.target.append(respuesta);
    event.target.reset();
    i++;
}