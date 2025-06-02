// 파일명: localstroage1.js

// 사용자의 브라우저 안에 데이터를 영구적으로 저장할 수 있는 공간
// key-value 구조 데이터를 저장
// 브라우저를 꺼도 유지 되며,동기적 처리를 한다.
// 단점
//  - 저장용량이 작다(5MB), 보안에 민감한 정보는 저장하면 안된다.

// 로컬 스토리
//  - 브라우저 속에 메모장!

// 로컬 스토리지에서 key는 중복되면 안된다.
// setItem(key,value);

// localStorage.setItem("이름","홍길동");
// localStorage.setItem("이름","이서희");

// // 저장된 데이터 꺼내기
// const name1 = localStorage.getItem("이름");
// console.log("스토리지 이름:",name1);

function save(){
    localStorage.setItem("id","seohee");
}

function load(){
    //1. 스토리지에서 꺼내기
    const id1 = localStorage.getItem("id");
    //2. alert창에 넣어서 보이기
    alert(id1);
}

function saveEmail(){
    const eamil = document.getElementById("emailInput");

    setTimeout(()=>{
        console.log("3초 후 실행됨!");
    },3000);

}

function pwSave() {
    localStorage.setItem("pwInput", pwInput);
}

function pwLoad() {
    const pw = localStorage.getItem("pwInput");
    alert(pw);
}

function showTime() {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, "0");
    const min = String(now.getMinutes()).padStart(2, "0");
    const sec = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("now").textContent = `${hour}:${min}:${sec}`;
}

setInterval(showTime, 1000);
showTime();


