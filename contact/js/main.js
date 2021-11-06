
let outX;
let outY;
let ourMap = document.getElementById('map');

ourMap.onmousemove = function(event) {
    outX = String(event.offsetX) + 'px';
    outY = String(event.offsetY) + 'px';
    ourMap.style.backgroundPositionX = outX;
    ourMap.style.backgroundPositionY = outY;
    console.log(`X: ${event.offsetX}, Y: ${event.offsetY}`)
}