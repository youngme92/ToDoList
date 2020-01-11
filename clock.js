// clock 부분 변수설정
const clcokJs = document.querySelector(".clock-js");
const clockTitle = document.querySelector(".clock");
// form, input 부분 변수 설정
const formJs = document.querySelector(".form-js"),
    input = formJs.querySelector("input");
const greeting = document.querySelector(".greeting-js");

const USER_LS = "currentUser"
const showing_CN = "showing"

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        formJs.classList.remove("hide");
        askForName();
    }else{
    paintGreeting(currentUser);
    };
};

function askForName(){
    formJs.classList.add("showing_CN");
    formJs.addEventListener("submit", handleSubmit);
};

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
};

function saveName(text){
    localStorage.setItem(USER_LS,text);
};

function paintGreeting(currentUser){
    greeting.classList.remove("showing_CN");
    formJs.classList.add("hide");
    greeting.innerText = `HELLO! ${currentUser}`
};

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hours = date.getHours();
    clockTitle.innerText
     = `${hours < 10? `0${hours}`: hours} : ${minutes <10? `0${minutes}`: minutes} : ${seconds <10? `0${seconds}`: seconds} `


};
function init(){
    getTime();
    setInterval(getTime, 1000);
    loadName();
};
init();
