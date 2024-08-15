let clicks = 0;
let upgradedAutoClicker = 0;
let autoClickers = 0;
let manualClicks = 1;
let autoUpgrader = 0;
let autoUpgradeTime = undefined;
let autoUpgradeOn = false;
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

function autoClick(){
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
        setInterval(autoClick, 100);
        new Audio('./audio/buy.mp3').play();
        autoClickers++; 
        upgradedAutoClicker++;
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
    if (clicks >= 25000 && document.getElementById('vipshop1').classList.contains('vipshop') && autoClickers >= 1){
        clearInterval(autoClick);
        setInterval(autoClick, 50);
        clicks -= 25000;
        new Audio('./audio/vipbuy.mp3').play();
        document.getElementById('vipshop1').classList.replace('vipshop', 'vipbought');
    }
    else if (document.getElementById('vipshop1').classList.contains('vipbought')){
        new Audio('./audio/error.mp3').play();
    }
    else{
        new Audio('./audio/error.mp3').play();
    }
}

function toggleShop(){
    document.getElementById('shoppanel').classList.toggle('shoppanel');
}

function toggleVipShop(){
    document.getElementById('vipshoppanel').classList.toggle('vipshoppanel');
}

function vipShopBuyShop2(){
    if(clicks >= 20000 && document.getElementById('vipshop2').classList.contains('vipshop')){
        clicks -= 20000;
        document.getElementById('secshopopen').classList.replace('secshoplocked', 'secshopopen');
        new Audio('./audio/vipbuy.mp3').play();
        document.getElementById('vipshop2').classList.replace('vipshop', 'vipbought');
    }
    else if (document.getElementById('vipshop2').classList.contains('vipbought')){
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

function storeGameData(){
    localStorage.setItem('clicks', clicks);
    localStorage.setItem('manualClicks', manualClicks);
    localStorage.setItem('precioManual', precioManual);
    localStorage.setItem('precioMejora', precioMejora);
    localStorage.setItem('precioClicker', precioClicker);
    localStorage.setItem('autoClickers', autoClickers);
    localStorage.setItem('upgradedAutoClicker', upgradedAutoClicker);
    if(document.getElementById('vipshop1').classList.contains('vipbought')){
        localStorage.setItem('vipx2comprado', true);
    }
    if(document.getElementById('vipshop2').classList.contains('vipbought')){
        localStorage.setItem('vipt2comprado', true);
    }
    localStorage.setItem('autoUpgradeOn', autoUpgradeOn);
}

function recoverGameData(){
    if(localStorage.getItem('clicks') != null){
    clicks = +localStorage.getItem('clicks');
    manualClicks = +localStorage.getItem('manualClicks');
    precioManual = +localStorage.getItem('precioManual');
    precioMejora = +localStorage.getItem('precioMejora');
    precioClicker = +localStorage.getItem('precioClicker');
    autoClickers = +localStorage.getItem('autoClickers');
    upgradedAutoClicker = +localStorage.getItem('upgradedAutoClicker');
    autoUpgradeOn = localStorage.getItem('autoUpgradeOn');
    if(autoClickers >= 1){
        setInterval(autoClick, 100)
    }
    if(localStorage.getItem('vipt2comprado')){
        document.getElementById('vipshop2').classList.replace('vipshop', 'vipbought');
        document.getElementById('secshopopen').classList.replace('secshoplocked', 'secshopopen');
        }
    if(localStorage.getItem('vipx2comprado')){
        clearInterval(autoClick)
        setInterval(autoClick, 50)
        document.getElementById('vipshop1').classList.replace('vipshop', 'vipbought');
    }
    }
}

recoverGameData();

setInterval(storeGameData, 10000);