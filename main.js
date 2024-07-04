let i = 0;
let clicks = document.createElement('h2');
document.body.appendChild(clicks);

document.getElementById('boton').onclick = function buttonClicked(){
    event.preventDefault();
    document.getElementById('button').play();
    if (i == 500){
        achievement();
    }
    i++;
}

setInterval(updateClicks, 10)

function updateClicks(){
    clicks.textContent = 'Clicks' + ' ' + '=' + ' ' + i;
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
