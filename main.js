let clicks = 0;
let upgradeaclick = 0;
let aclickers = 0;
let manualclick = 1;
let vipx2comprado = false;
let preciomanual = 100;
let preciomejora = 200;
let precioclicker = 500;
let clickvalue = document.createElement('h2');
let div = document.getElementById('buttonpanel');
div.appendChild(clickvalue);

document.getElementById('boton').onclick = function buttonClicked(){
    event.preventDefault();
    document.getElementById('button').play();
    clicks += manualclick;
}

setInterval(updateClicks, 10);

function updateClicks(){
    clickvalue.textContent = 'Clicks = ' + clicks;
}

function autoclick(){
    clicks += upgradeaclick * aclickers;
}

function buyManualClick(){
    if(clicks >= preciomanual){
    manualclick++;
    document.getElementById('celebration').play();
    clicks -= preciomanual;
    preciomanual += 50;
    }
    else{
        alert("No tienes suficientes clicks");
    }
}
function buyAutoclick(){
    if(aclickers == 0 && clicks >= precioclicker){
        autoclicker = setInterval(autoclick, 1000);
        document.getElementById('celebration').play();
        aclickers++; 
        upgradeaclick++;
        clicks -= precioclicker;
        precioclicker += 250;
    }
    else if(aclickers < 10 && clicks >= precioclicker){
        document.getElementById('celebration').play();
        clicks -= precioclicker;
        aclickers++;
        precioclicker += 250;
        if(aclickers > 9){
            document.getElementById('shop2').classList.add('shopbought');
            document.getElementById('shop2').classList.remove('shop');
        }
    }
    else if(aclickers == 10){}
    else{
        alert("No tienes suficientes clicks");
    }
}

function upgradeAutoclick(){
    if (clicks >= preciomejora && aclickers >= 1){
        document.getElementById('celebration').play();
        clicks -= preciomejora;
        upgradeaclick++;
        preciomejora += 50;
    }
    else if(aclickers == 0){
        alert("Debes comprar un autoclicker primero.")
    }
    else{
        alert("No tienes suficientes clicks");
    }
}

function buyVipX2(){
    if (clicks >= 10000 && !vipx2comprado){
        clearInterval(autoclicker);
        setInterval(autoclick, 500);
        clicks -= 10000;
        vipx2comprado = true;
        document.getElementById('vipbuy').play();
        document.getElementById('vipshop1').classList.add('vipbought');
        document.getElementById('vipshop1').classList.remove('vipshop');
    }
    else if (vipx2comprado == true){}
    else{
        alert("No tienes suficientes clicks.");
    }
}
