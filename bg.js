const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(randomNumber){
    const image = new Image();
    image.src = `image/${randomNumber}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
};

function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER );
    return number + 1;
};

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
};

init();