let i = 0;
let j = 0;
let k = 0;
let l = 1;
let vipx2comprado = 0;
let preciomanual = 100;
let preciomejora = 200;
let precioclicker = 500;
let clicks = document.createElement('h2');
let div = document.getElementById('buttonpanel');
div.appendChild(clicks);

document.getElementById('boton').onclick = function buttonClicked(){
    event.preventDefault();
    document.getElementById('button').play();
    i += l;
}

setInterval(updateClicks, 10);

function updateClicks(){
    clicks.textContent = 'Clicks' + ' ' + '=' + ' ' + i;
}

function autoclick(){
    i += j * k;
}

function buyManualClick(){
    if(i >= preciomanual){
    l++;
    document.getElementById('celebration').play();
    i -= preciomanual;
    preciomanual += 50;
    }
    else{
        alert("No tienes suficientes clicks");
    }
}
function buyAutoclick(){
    if(k == 0 && i >= precioclicker){
        autoclicker = setInterval(autoclick, 1000);
        document.getElementById('celebration').play();
        k++; 
        j++;
        i -= precioclicker;
        precioclicker += 250;
    }
    else if(k < 10 && i >= precioclicker){
        document.getElementById('celebration').play();
        i -= precioclicker;
        k++;
        precioclicker += 250;
    }
    else if(k == 10){
        alert("Has alcanzado el limite de autoclickers");
    }
    else{
        alert("No tienes suficientes clicks");
    }
}

function upgradeAutoclick(){
    if (i >= preciomejora){
        document.getElementById('celebration').play();
        i -= preciomejora;
        j++;
        preciomejora += 50;
    }
    else{
        alert("No tienes suficientes clicks");
    }
}

function buyVipX2(){
    if (i >= 10000 && vipx2comprado == 0){
        clearInterval(autoclicker);
        setInterval(autoclick, 500);
        i -= 10000;
        vipx2comprado = 1;
        document.getElementById('vipbuy').play();
    }
    else if (vipx2comprado => 1){
        alert('¡Ya has comprado esta mejora!')
    }
    else{
        alert("No tienes suficientes clicks");
    }
}
