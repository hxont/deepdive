# ☁️ Day 12
이 문서는 해당 날에 학습한 내용을 정리하고 실습 과제를 기록한 리드미입니다.

## 🔖 오늘의 주제
> **JS**

---

## 📚 배운 내용

### 📦 자바스크립트 배열 주요 함수 정리
#### 1. push()
- 배열의 끝에 데이터를 추가
```javascript
let numbers = [];
numbers.push(1);
numbers.push(2);
console.log(numbers); // [1, 2]
```
#### 2. pop()
- 배열의 마지막 값을 제거하고 반환
```javascript
let stack = [1, 2, 3];
stack.pop();
stack.pop();
console.log(stack); // [1]
```
#### 3. `unshift()`
- 배열의 앞에 데이터를 추가
```javascript
let queue = ["B", "C"];
queue.unshift("A");
console.log(queue); // ["A", "B", "C"]
```
#### 4. `shift()`
- 배열의 첫 번째 값을 제거하고 반환
```javascript
let line = ["사람1", "사람2", "사람3"];
line.shift();
console.log(line); // ["사람2", "사람3"]
```
#### 5. includes()
- 특정 값이 배열에 있는지 true/false 반환
```javascript
let items = ["볼펜", "연필", "지우개"];
console.log(items.includes("연필"));  // true
console.log(items.includes("샤프"));  // false
```
#### 6. indexOf()
- 특정 값의 인덱스 위치 반환, 없으면 -1
```javascript
let langs = ["HTML", "CSS", "JavaScript"];
console.log(langs.indexOf("CSS"));     // 1
console.log(langs.indexOf("Python"));  // -1
```
#### 7. `join()`
- 배열을 문자열로 합치기 (구분자 사용 가능)
```javascript
let nums = [1, 2, 3];
console.log(nums.join(" - ")); // "1 - 2 - 3"
```
#### 8. `slice(start, end)`
- 배열의 일부를 잘라서 새로운 배열 반환
```javascript
let colors = ["빨", "주", "노", "초", "파"];
let warm = colors.slice(0, 3);
console.log(warm); // ["빨", "주", "노"]
```
#### 9. `splice(start, deleteCount, ...items)`
- 배열에서 요소 제거/삽입/교체
```javascript
let nums = [10, 20, 30, 40];
nums.splice(1, 2);  // 20, 30 제거
console.log(nums); // [10, 40]
```
#### 10. `forEach()`
- 배열을 반복하면서 각각 처리
```javascript
let foods = ["김밥", "떡볶이", "순대"];
foods.forEach(function(item) {
  console.log("메뉴:", item);
});
```

### 📚 DOM 요소란?
**DOM**은 **Document Object Model**의 줄임말이다. 
→ 웹 브라우저가 HTML 문서를 해석해서 만든 **트리 구조의 객체 모델**

#### 🧱 DOM 요소 생성과 삽입
✅ 핵심 메서드: `createElement()` + `appendChild()`

1. `createElement()`
`document.createElement('태그이름')`은 HTML 태그를 자바스크립트로 새롭게 만드는 함수
2. `appendChild()`
`appendChild()`는 이미 만든 요소를 **다른 요소의 "자식"으로 삽입하는 함수**

---

## 📝 과제

**오늘의 과제**

💡 **실행 화면 캡처**


---

## 💭 오늘의 회고
축제 이슈 결석
