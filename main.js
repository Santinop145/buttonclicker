let i = 1;
function handleSubmit(event){
    event.preventDefault();
    let respuesta = document.createElement('h2');
    if (document.querySelector('h2'))
        document.querySelector('h2').remove();
        respuesta.textContent = 'Clicks' + ' ' + '=' + ' ' + i;
    event.target.append(respuesta);
    document.getElementById('button').play();
    event.target.reset();
    i++;
}

