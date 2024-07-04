let i = 0;
let j = 0;
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
    if (j < 1){
        let autoclicker = setInterval(autoclick, 1000);
        j++;
    }
    else if (i >= 201){
        i -= 200
        j += 1
        document.getElementById('celebration').play();
    }
    else{
        alert("No tienes clicks disponibles")
    }
}
