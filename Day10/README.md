# ☁️ Day 10
이 문서는 해당 날에 학습한 내용을 정리하고 실습 과제를 기록한 리드미입니다.

## 🔖 오늘의 주제
> **CSS & JS**

---

## 📚 배운 내용

### relative & absolute 차이
🟡 position: relative  
- 원래 자리를 기준으로 top, left 등을 사용해 조금 이동  
- 자리 차지는 그대로 있음 (flow에서 빠지지 않음)      

🔴 position: absolute   
- 가장 가까운 relative, absolute, or fixed 조상을 기준으로 위치함  
- 만약 그런 조상이 없으면 body(전체 문서)를 기준으로 함  
- 원래 위치에서 flow(흐름)에서 빠짐 → 다른 요소들이 그 자리에 들어올 수 있음

---

### JS

#### onclick과 함수
- HTML 요소에 클릭 이벤트가 발생했을 때 실행되는 JavaScript 함수 연결 방식
```html
<!-- 인라인 방식 -->
<button onclick="sayHello()">클릭</button>

<script>
  function sayHello() {
    alert("안녕하세요!");
  }
</script>
```

#### window 객체 종류
- 브라우저 환경에서 제공되는 전역 객체로, 브라우저 창 자체를 의미함. 다양한 메서드와 속성을 제공
```javascript
window.alert("경고!");
console.log(window.location.href); // 현재 주소
```

✅ 1. alert() – 경고창 표시   
- 사용자에게 경고 메시지를 보여주는 기본 팝업창. 확인 버튼을 누를 때까지 다음 코드 실행 멈춤.

✅ 2. confirm() – 확인창 표시
- 사용자에게 예/아니오(확인/취소)를 묻는 창. true 또는 false 반환.  

✅ 3. prompt() – 사용자 입력 받기
- 사용자에게 텍스트를 입력받는 팝업창. 취소 시 null 반환.

✅ 4. setTimeout() – 일정 시간 후 실행
- 특정 시간(ms) 후에 한 번만 함수 실행.

✅ 5. setInterval() – 주기적 반복 실행
- 특정 간격마다 반복적으로 함수 실행.

✅ 6. location – 현재 주소 확인 또는 이동
- 브라우저의 주소(URL)를 가져오거나 변경할 수 있음.

✅ 7. open() – 새 창(또는 탭) 열기
- 지정된 URL을 새 창 또는 새 탭에서 열기.



---

## 📝 과제

**오늘의 과제**
> 인스타그램 클론코딩

💡 **실행 화면 캡처**
<img width="435" alt="스크린샷 2025-06-18 오전 11 18 21" src="https://github.com/user-attachments/assets/02aef7d3-3274-43fe-bd3b-2ee014362aff" />
---

## 💭 오늘의 회고
연주니 등장 ✨

