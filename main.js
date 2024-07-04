let i = 1;
document.getElementById('boton').onclick = function buttonClicked(){
    event.preventDefault();
    let respuesta = document.createElement('h2');
    setInterval(updateClicks, 500)
    document.getElementById('button').play();
    if (i == 500){
        achievement();
    }
    i++;
    event.target.reset();
}
function updateClicks(){
        document.querySelector('h2').remove();
        respuesta.textContent = 'Clicks' + ' ' + '=' + ' ' + i;
        document.body.appendChild(respuesta);
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
