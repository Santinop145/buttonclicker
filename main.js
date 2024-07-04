let i = 0;
let j = 1;
let clicks = document.createElement('h2');
let div = document.getElementById('buttonpanel');
div.appendChild(clicks);

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
    i += j;
}

function upgradeAutoclick(){
    if (i >= 500 && i > 100 || j > 1 && i > 100){
        i -= 100
        j += 1
    }
    else{
        alert("No es posible mejorar ahora mismo, desbloquea el autoclicker o revisa que tengas mas de 100 clicks disponibles.")
    }
}

}
