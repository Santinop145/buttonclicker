let i = 0;
let j = 0;
let precio = 200;
let clicks = document.createElement('h2');
let div = document.getElementById('buttonpanel');
div.appendChild(clicks);

document.getElementById('boton').onclick = function buttonClicked(){
    event.preventDefault();
    document.getElementById('button').play();
    i++;
}

setInterval(updateClicks, 10);

function updateClicks(){
    clicks.textContent = 'Clicks' + ' ' + '=' + ' ' + i;
}

function autoclick(){
    i += j;
}

function upgradeAutoclick(){
    if (j < 1 && i >= precio){
        let autoclicker = setInterval(autoclick, 1000);
        document.getElementById('celebration').play();
        i -= precio;
        j++;
        precio += 50;
    }
    else if (i >= precio){
        document.getElementById('celebration').play();
        i -= precio;
        j++;
        precio += 50;
    }
    else{
        alert("No tienes clicks disponibles");
    }
}
