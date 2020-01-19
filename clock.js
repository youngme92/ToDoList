// clock 부분 변수설정
const clcokJs = document.querySelector(".clock-js");
const clockTitle = document.querySelector(".clock");
// form, input 부분 변수 설정
const formJs = document.querySelector(".form-js"),
    input = formJs.querySelector("input");
const greeting = document.querySelector(".greeting-js");
// 로컬스토리지 키값 변수, display showing 변수 설정
const USER_LS = "currentUser"
const showing_CN = "showing"
// 이름 불러오기, 키값이 null일 경우 display block/ 이름 묻는함수, 키값 있을경우 화면에 출력
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        formJs.classList.remove("hide");
        askForName();
    }else{
    paintGreeting(currentUser);
    };
};
// 이름 묻는 함수, display showing, submit 시 handleSubmit 함수 발동
function askForName(){
    formJs.classList.add("showing_CN");
    formJs.addEventListener("submit", handleSubmit);
};
// handleSubmit함수/ 키값에 인풋벨류 입력, event 디폴트값 설정, 이름값 입력 및 저장함수 실행
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
};
// 이름저장 함수실행
function saveName(text){
    localStorage.setItem(USER_LS,text);
};
// 이름 출력함수 실행
function paintGreeting(currentUser){
    greeting.classList.remove("showing_CN");
    formJs.classList.add("hide");
    greeting.innerText = `HELLO! ${currentUser}`
};
// 시간 불러오는 함수
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
