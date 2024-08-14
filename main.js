let clicks = 0;
let upgradedAutoClicker = 0;
let autoClickers = 0;
let manualClicks = 1;
let autoUpgrader = 0;
let autoUpgradeTime = undefined;
let autoUpgradeOn = false;
let vipx2comprado = false;
let vipt2comprado = false;
let precioManual = 100;
let precioMejora = 200;
let precioClicker = 500;
let clickValue = document.createElement('h2');
let div = document.getElementById('buttonpanel');
div.appendChild(clickValue);

document.getElementById('boton').onclick = function buttonClicked(){
    event.preventDefault();
    new Audio('./audio/button.mp3').play();
    clicks += manualClicks;
}

setInterval(updateClicks, 10);

function autoUpgrade(){
    if(autoUpgrader == 1 && clicks >= 500){
        upgradedAutoClicker++;
        clicks -= 500
    }
}

function updateClicks(){
    clickValue.textContent = 'Clicks = ' + clicks.toFixed(0);
}

function autoclick(){
    clicks += upgradedAutoClicker * autoClickers / 10;
}

function buyManualClick(){
    if(clicks >= precioManual){
    manualClicks++;
    new Audio('./audio/buy.mp3').play();
    clicks -= precioManual;
    precioManual += 50;
    }
    else{
        new Audio('./audio/error.mp3').play();
    }
}
function buyAutoclick(){
    if(autoClickers == 0 && clicks >= precioClicker){
        autoClicker = setInterval(autoclick, 100);
        new Audio('./audio/buy.mp3').play();
        autoClickers++; 
        upgradedAutoclicker++;
        clicks -= precioClicker;
        precioClicker += 250;
    }
    else if(autoClickers < 10 && clicks >= precioClicker){
        new Audio('./audio/buy.mp3').play();
        clicks -= precioClicker;
        autoClickers++;
        precioClicker += 250;
        if(autoClickers > 9){
            document.getElementById('shop2').classList.add('shopbought');
            document.getElementById('shop2').classList.remove('shop');
        }
    }
    else if(autoClickers == 10){
        new Audio('./audio/error.mp3').play();
    }
    else{
        new Audio('./audio/error.mp3').play();
    }
}

function upgradeAutoClick(){
    if (clicks >= precioMejora && autoClickers >= 1){
        new Audio('./audio/buy.mp3').play();
        clicks -= precioMejora;
        upgradedAutoClicker++;
        precioMejora += 50;
    }
    else if(autoClickers == 0){
        new Audio('./audio/error.mp3').play();
    }
    else{
        new Audio('./audio/error.mp3').play();
    }
}

function buyAutoUpgrader(){
    if (clicks >= 15000 && autoUpgrader == 0){
        new Audio('./audio/buy.mp3').play();
        clicks -= 15000;
        autoUpgrader++;
        autoUpgradeOn = true;
    }
    if(autoUpgradeOn == true && autoUpgrader == 1){
        autoUpgradeOn = !autoUpgradeOn;
        autoUpgradeTime = setInterval(autoUpgrade, 2000);
    }
    else if (autoUpgradeOn == false){
        autoUpgradeOn = !autoUpgradeOn;
        clearInterval(autoUpgradeTime);
    }
    else{
        new Audio('./audio/error.mp3').play();
    }
}

function buyVipX2(){
    if (clicks >= 25000 && !vipx2comprado){
        clearInterval(autoClicker);
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

function toggleSecShop(){
    if(document.getElementById('secshopopen').classList.contains('secshopopen')){
        document.getElementById('secshoppanel').classList.toggle('secshoppanel');
    }
    else{
        new Audio('./audio/error.mp3').play();
    }
}

//almacenamiento de datos

function recoverGameData(){
    clicks = +localStorage.getItem('clicks');
    manualClicks = +localStorage.getItem('manualClicks');
    precioManual = +localStorage.getItem('precioManual');
    precioMejora = +localStorage.getItem('precioMejora');
    precioClicker = +localStorage.getItem('precioClicker');
    autoClickers = +localStorage.getItem('autoClickers');
    upgradedAutoClicker = +localStorage.getItem('upgradedAutoClicker');
    vipx2comprado = localStorage.getItem('vipx2comprado');
    vipt2comprado = localStorage.getItem('vipt2comprado');
    autoUpgradeOn = localStorage.getItem('autoUpgradeOn');
        if(vipx2comprado == 1){
            document.getElementById('vipshop1').classList.replace('vipshop', 'vipbought');
        }
        if(vipt2comprado == 1){
        document.getElementById('vipshop2').classList.replace('vipshop', 'vipbought');
        }
}

function storageGameData(){
    localStorage.setItem('clicks', clicks);
    localStorage.setItem('manualClicks', manualClicks);
    localStorage.setItem('precioManual', precioManual);
    localStorage.setItem('precioMejora', precioMejora);
    localStorage.setItem('precioClicker', precioClicker);
    localStorage.setItem('autoClickers', autoClickers);
    localStorage.setItem('upgradedAutoClicker', upgradedAutoClicker);
    localStorage.setItem('vipx2comprado', vipx2comprado);
    localStorage.setItem('vipt2comprado', vipt2comprado);
    localStorage.setItem('autoUpgradeOn', autoUpgradeOn);
}

setInterval(storageGameData, 10000);
recoverGameData();
storageGameData();