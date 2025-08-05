# ☁️ Day 52
이 문서는 해당 날에 학습한 내용을 정리하고 실습 과제를 기록한 리드미입니다.

## 🔖 오늘의 주제
> **react**

---

## 📚 배운 내용

### 📌 SCSS/SASS + React

#### ✅ SCSS(Sassy CSS)란?
- CSS의 확장 문법으로, 더 구조적이고 재사용 가능한 스타일링이 가능함.
- 변수, 중첩, 믹스인, 조건문, 반복문, 상속 등 프로그래밍적 요소 지원.
- .scss 확장자 사용 (vs .sass는 들여쓰기 문법으로 중괄호와 세미콜론 없음)
- 리액트에서는 주로 .scss를 사용함.

#### ✅ 왜 SCSS를 사용하는가?
- CSS의 단점: 코드 반복, 스타일 간 관계 파악 어려움, 유지보수 어려움.
- SCSS의 장점: 중첩 구조로 시각적 이해 용이, 반복 줄이고 유지보수 쉬움, 변수로 일관된 스타일 적용 가능.

#### ✅ 주요 SCSS 문법
🔹 변수 ($)
```scss
$primary-color: #3498db;
$padding-lg: 2rem;
```
🔹 중첩
```scss
.card {
h2 {
font-size: 2rem;
}
p {
color: gray;
}
}
```
🔹 믹스인 (@mixin, @include)
```scss
@mixin button-style($bg-color) {
padding: 10px 20px;
background-color: $bg-color;
color: white;
border-radius: 8px;
}

.primary {
@include button-style(#3498db);
}
````
🔹 조건문 (@if, @else)
```scss
$theme: dark;

.box {
@if $theme == light {
background: white;
color: black;
} @else if $theme == dark {
background: #111;
color: white;
}
}
```
🔹 반복문 (@for, @each, @while)
```scss
@for $i from 1 through 5 {
.box-#{$i} {
width: 3rem * $i;
}
}
```
🔹 상속 (@extend)
```scss
.btn {
padding: 0.5rem 1rem;
}

.btn-primary {
@extend .btn;
background-color: blue;
}
```


--- 

## 📝 과제

**오늘의 과제**
>

💡 **실행 화면 캡처**




---

## 💭 오늘의 회고
몸이 안 좋다
