let clicks = 0;
let upgradeaclick = 0;
let aclickers = 0;
let manualclick = 1;
let vipx2comprado = false;
let vipt2comprado = false;
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
    clickvalue.textContent = 'Clicks = ' + clicks.toFixed(0);
}

function autoclick(){
    clicks += upgradeaclick * aclickers / 10;
}

function buyManualClick(){
    if(clicks >= preciomanual){
    manualclick++;
    new Audio('./audio/buy.mp3').play();
    clicks -= preciomanual;
    preciomanual += 50;
    }
    else{
        new Audio('./audio/error.mp3').play();
    }
}
function buyAutoclick(){
    if(aclickers == 0 && clicks >= precioclicker){
        autoclicker = setInterval(autoclick, 100);
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
    }
    else{
        new Audio('./audio/error.mp3').play();
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
    }
    else{
        new Audio('./audio/error.mp3').play();
    }
}

function buyVipX2(){
    if (clicks >= 25000 && !vipx2comprado){
        clearInterval(autoclicker);
        setInterval(autoclick, 50);
        clicks -= 25000;
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

function toggleShop(){
    document.getElementById('shoppanel').classList.toggle('shoppanel')
}

function toggleSecShop(){
    if(document.getElementById('secshoppanel')){
        document.getElementById('secshoppanel').classList.toggle('secshoppanel')
    }
    else{
        new Audio('./audio/error.mp3').play();
    }
}


function toggleVipShop(){
    document.getElementById('vipshoppanel').classList.toggle('vipshoppanel')
}

function VipShopBuyShop2(){
    if(clicks >= 20000 && !vipt2comprado){
        clicks -= 20000;
        vipt2comprado == true;
        document.getElementById('secshopopen').classList.replace('secshoplocked', 'secshopopen')
        new Audio('./audio/vipbuy.mp3').play();
        document.getElementById('vipshop2').classList.replace('vipshop', 'vipbought');
    }
    else if (vipt2comprado == true){
        new Audio('./audio/error.mp3').play();
    }
    else{
        new Audio('./audio/error.mp3').play();
    }
}

