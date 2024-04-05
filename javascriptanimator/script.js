const dynamicObject = document.getElementById('dynamicObject');
const animateButton = document.getElementById('animateButton');

let isMoving = false;

animateButton.addEventListener('click', function() {
    if (!isMoving) {
        dynamicObject.style.transform = 'translate(300px, -50%)';
        isMoving = true;
    } else {
        dynamicObject.style.transform = 'translate(0, -50%)';
        isMoving = false;
    }
});
