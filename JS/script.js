const bigRectOne = document.getElementById('_bigRectOne')
const bigRectTwo = document.getElementById('_bigRectTwo')
const bigRectThree = document.getElementById('_bigRectThree')
const bigRectFour = document.getElementById('_bigRectFour')
const bigRectFive = document.getElementById('_bigRectFive')
const bigRectSix = document.getElementById('_bigRectSix')
const bigRectSeven = document.getElementById('_bigRectSeven')

const cardOne = document.getElementById('_card1')
const cardTwo = document.getElementById('_card2')
const cardThree = document.getElementById('_card3')
const cardFour = document.getElementById('_card4')
const cardFive = document.getElementById('_card5')
const cardSix = document.getElementById('_card6')
const cardSeven = document.getElementById('_card7')

const containerTwo = document.getElementById('_containerTwo')

var rectMove = 0;
var currentRect = "";
var pastRect = "";

function pastRectAssigner(){
    if (pastRect == currentRect){
        pastRect = "";
    }else{
        pastRect = currentRect;
    }
}

function moveRect(bigRectNum){
    bigRectNum.style.top = '20%';
}

function moveBackRect(bigRectNum){
    bigRectNum.style.top = '-70%';
}

function moveBigRects(BrectMove){
    if (BrectMove == 1){
        containerTwo.style.backgroundImage = 'url()';
        moveRect(bigRectOne);
        moveBackRect(pastRect);
        
    } else if (BrectMove == 2){
        moveRect(bigRectTwo);
        moveBackRect(pastRect);
    } else if (BrectMove == 3){
        containerTwo.style.backgroundImage = 'url(Images/BgWed.png)';
        moveRect(bigRectThree);
        moveBackRect(pastRect);
    } else if (BrectMove == 4){
        moveRect(bigRectFour);
        moveBackRect(pastRect);
    } else if (BrectMove == 5){
        moveRect(bigRectFive);
        moveBackRect(pastRect);
    } else if (BrectMove == 6){
        moveRect(bigRectSix);
        moveBackRect(pastRect);
    } else if (BrectMove == 7){
        moveRect(bigRectSeven);
        moveBackRect(pastRect);
    }
}

cardOne.addEventListener('click', () => {
    rectMove = 1;
    pastRectAssigner();
    currentRect = bigRectOne;
    moveBigRects(rectMove);
});

cardTwo.addEventListener('click', () => {
    rectMove = 2;
    pastRectAssigner();
    currentRect = bigRectTwo;
    moveBigRects(rectMove);
});

cardThree.addEventListener('click', () => {
    rectMove = 3;
    pastRectAssigner();
    currentRect = bigRectThree;
    moveBigRects(rectMove);
});

cardFour.addEventListener('click', () => {
    rectMove = 4;
    pastRectAssigner();
    currentRect = bigRectFour;
    moveBigRects(rectMove);
});

cardFive.addEventListener('click', () => {
    rectMove = 5;
    pastRectAssigner();
    currentRect = bigRectFive;
    moveBigRects(rectMove);
});

cardSix.addEventListener('click', () => {
    rectMove = 6;
    pastRectAssigner();
    currentRect = bigRectSix;
    moveBigRects(rectMove);
});

cardSeven.addEventListener('click', () => {
    rectMove = 7;
    pastRectAssigner();
    currentRect = bigRectSeven;
    moveBigRects(rectMove);
});

// cardOne.addEventListener('mouseover', () => {
//     cardOne.style.transition = 'background 0.5s ease'; // Add transition property (Not Working ata)
//     cardOne.style.background = 'url("https://i.pinimg.com/originals/d8/6f/3a/d86f3ab8192f5589eca93cd7725ad8e4.gif")';
//     cardOne.style.boxShadow = 'inset 50px 50px 100px #0d0d0d'
// });

// cardOne.addEventListener('mouseout', () => {
//     cardOne.style.background = "#755740";
//     cardOne.style.boxShadow = 'none'
// });

