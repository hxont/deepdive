# ☁️ Day 26
이 문서는 해당 날에 학습한 내용을 정리하고 실습 과제를 기록한 리드미입니다.

## 🔖 오늘의 주제
> **react**

---

## 📚 배운 내용
### JavaScript 비동기 처리
#### ✅ Promise란?
자바스크립트에서 비동기 작업을 처리하는 객체    
이전에는 callback 지옥(callback hell)이 많았기 때문에, 코드 구조를 더 읽기 쉽게 개선하기 위해 등장   
3가지 상태(Pending, Fulfilled, Rejected)를 갖고, .then()과 .catch()로 결과를 처리

```
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("✅ 완료!");
  }, 2000);
});

p.then((result) => console.log(result));

```

#### ✅ async/await란?
async/await는 Promise를 더 간단하게 쓰는 문법     
에러는 try...catch로 처리

* async/await + fetch
```
async function loadUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await response.json();
  console.log(user);
}
loadUser();
```

#### ✅ REST API란?
**Representational State Transfer**   
클라이언트와 서버 간에 HTTP 프로토콜을 사용하여 데이터를 교환하는 방식     
- Stateless: 서버는 클라이언트의 상태를 저장하지 않으며, 요청에는 필요한 모든 정보가 포함되어야 함   
- 자원(Resource): REST는 클라이언트가 자원(예: 사용자, 게시물)을 요청하고 서버가 해당 자원의 표현을 반환하는 방식으로 작동
- HTTP 메서드 사용
  - **`GET`**: 데이터를 조회
  - **`POST`**: 데이터를 생성
  - **`PUT`**: 데이터를 업데이트
  - **`DELETE`**: 데이터를 삭제-

```
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(data => console.log(data));
```


---

## 📝 과제

**오늘의 과제**
> 클론코딩

💡 **실행 화면 캡처**



---

## 💭 오늘의 회고
JS는 비동기를 너무 좋아한다
