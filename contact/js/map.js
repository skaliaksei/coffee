// получение блока с картой
let ourMap = document.getElementById('map')

// позиционирование центра для разных разрешений экрана
if (ourMap.offsetWidth > 800) {
    ourMap.style.backgroundPositionX = `-300px`;
} else if (ourMap.offsetWidth > 600) {
    ourMap.style.backgroundPositionX = `-450px`;
} else {
    ourMap.style.backgroundPositionX = `-650px`;
}

// позиционирование бэкграунда через backgroundPosition
// offsetX и offsetY - слушаем координаты мыши над картой

ourMap.style.backgroundPositionY = `-100px`;

let startX = Number(ourMap.style.backgroundPositionX.slice(0, -2));
let startY = Number(ourMap.style.backgroundPositionY.slice(0, -2));

ourMap.addEventListener('mousemove', function(event) {
    // смещение карты по X
    if (event.offsetX > ourMap.offsetWidth / 2) {

        let outX = startX + (((ourMap.offsetWidth / 2) - event.offsetX) / 2)
        outX += 'px'
        ourMap.style.backgroundPositionX = outX;
    } else {

        let outX = startX + (((ourMap.offsetWidth / 2) - event.offsetX) / 2)
        outX += 'px'
        ourMap.style.backgroundPositionX = outX;
    }
    // смещение карты по Y
    if (event.offsetY > ourMap.offsetHeight / 2) {

        let outY = startY + ((ourMap.offsetHeight / 2) - event.offsetY) / 2;
        outY += 'px'
        ourMap.style.backgroundPositionY = outY;
    } else {

        let outY = startY + ((ourMap.offsetHeight / 2) - event.offsetY) / 3;
        outY += 'px'
        ourMap.style.backgroundPositionY = outY;
    }

});