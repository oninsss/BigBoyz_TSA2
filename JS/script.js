const rectOne = document.getElementById('_rectOne')
const bigRectOne = document.getElementById('_bigRectOne')
const bigRectTwo = document.getElementById('_bigRectTwo')
const buttonOne = document.getElementById('_buttonOne')
const buttonTwo = document.getElementById('_buttonTwo')

var rectMove = 0;
var currentRect = "";
var pastRect = currentRect;

function moveRect(bigRectNum){
    bigRectNum.style.top = '20%';
}

function moveBackRect(bigRectNum){
    bigRectNum.style.top = '-70%';
}

function moveBigRects(BrectMove){
    if (BrectMove == 1){
        moveRect(bigRectOne);
        moveBackRect(pastRect);
    } else if (BrectMove == 2){
        moveRect(bigRectTwo);
        moveBackRect(pastRect);
        pastRect = currentRect;
    }
}

buttonOne.addEventListener('click', () => {
    rectMove = 1;
    pastRect = currentRect; // Assign the value of currentRect to pastRect before moving the big rectangles.
    currentRect = bigRectOne;
    moveBigRects(rectMove);
});

buttonTwo.addEventListener('click', () => {
    rectMove = 2;
    pastRect = currentRect; // Assign the value of currentRect to pastRect before moving the big rectangles.
    currentRect = bigRectTwo;
    moveBigRects(rectMove);
});

