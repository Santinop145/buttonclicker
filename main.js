let i = 1;
function handleSubmit(event){
    event.preventDefault();
    let respuesta = document.createElement('h2');
    if (document.querySelector('h2'))
        document.querySelector('h2').remove();
        respuesta.textContent = 'Clicks' + ' ' + '=' + ' ' + i;
    event.target.append(respuesta);
    document.getElementById('button').play();
    i++;
    event.target.reset();
}

function achievement(){
    if (i == 500){
        let logro = document.createElement('h3');
        logro.textContent = '¡Clickeaste 500 veces!'
        body.append(logro);
    }
}
