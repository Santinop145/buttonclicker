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
    new Audio('./audio/button.mp3').play();
    clicks += manualclick;
}

setInterval(updateClicks, 10);

function updateClicks(){
    clickvalue.textContent = 'Clicks = ' + clicks;
}

function autoclick(){
    clicks += upgradeaclick * aclickers;
}

function denied3(){
    document.getElementById('shop3').classList.toggle('shopdenied');
}

function denied2(){
    document.getElementById('shop2').classList.toggle('shopdenied');
}

function denied1(){
    document.getElementById('shop1').classList.toggle('shopdenied');
}

function buyManualClick(){
    if(clicks >= preciomanual){
    manualclick++;
    new Audio('./audio/buy.mp3').play();
    clicks -= preciomanual;
    preciomanual += 50;
    }
    else{
        document.getElementById('shop3').classList.toggle('shopdenied');
        deniedvar = setTimeout(denied3, 100);
        new Audio('./audio/error.mp3').play();
    }
}
function buyAutoclick(){
    if(aclickers == 0 && clicks >= precioclicker){
        autoclicker = setInterval(autoclick, 1000);
        new Audio('./audio/buy.mp3').play();
        aclickers++; 
        upgradeaclick++;
        clicks -= precioclicker;
        precioclicker += 250;
    }
    else if(aclickers < 10 && clicks >= precioclicker){
        new Audio('./audio/buy.mp3').play();
        clicks -= precioclicker;
        aclickers++;
        precioclicker += 250;
        if(aclickers > 9){
            document.getElementById('shop2').classList.add('shopbought');
            document.getElementById('shop2').classList.remove('shop');
        }
    }
    else if(aclickers == 10){
        new Audio('./audio/error.mp3').play();
        document.getElementById('shop2').classList.toggle('shopdenied');
        deniedvar = setTimeout(denied2, 100);
    }
    else{
        new Audio('./audio/error.mp3').play();
        document.getElementById('shop2').classList.toggle('shopdenied');
        deniedvar = setTimeout(denied2, 100);
    }
}

function upgradeAutoclick(){
    if (clicks >= preciomejora && aclickers >= 1){
        new Audio('./audio/buy.mp3').play();
        clicks -= preciomejora;
        upgradeaclick++;
        preciomejora += 50;
    }
    else if(aclickers == 0){
        new Audio('./audio/error.mp3').play();
        document.getElementById('shop1').classList.toggle('shopdenied');
        deniedvar = setTimeout(denied1, 100);
    }
    else{
        new Audio('./audio/error.mp3').play();
        new Audio('./audio/error.mp3').play();
        document.getElementById('shop1').classList.toggle('shopdenied');
        deniedvar = setTimeout(denied1, 100);
    }
}

function buyVipX2(){
    if (clicks >= 10000 && !vipx2comprado){
        clearInterval(autoclicker);
        setInterval(autoclick, 500);
        clicks -= 10000;
        vipx2comprado = true;
        new Audio('./audio/vipbuy.mp3').play();
        document.getElementById('vipshop1').classList.replace('vipshop', 'vipbought');
    }
    else if (vipx2comprado == true){
        new Audio('./audio/error.mp3').play();
    }
    else{
        new Audio('./audio/error.mp3').play();
    }
}
