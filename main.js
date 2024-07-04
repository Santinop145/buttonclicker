let i = 1;
function handleSubmit(event){
    event.preventDefault();
    let respuesta = document.createElement('h2');
    if (document.querySelector('h2'))
        document.querySelector('h2').remove();
        respuesta.textContent = 'Clicks' + ' ' + '=' + ' ' + i;
    document.body.appendChild(respuesta);
    document.getElementById('button').play();
    if (i == 500){
        achievement();
    }
    i++;
    event.target.reset();
}

function achievement(){
    let logro = document.createElement('h3');
    logro.textContent = '¡Clickeaste 500 veces! (Obtuviste un autoclicker)';
    document.body.appendChild(logro);
    document.getElementById('celebration').play();
    let autoclicker = setInterval(autoclick, 1000);
}

function autoclick(){
    i++;
}
