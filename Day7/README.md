# ☁️ Day 7
이 문서는 해당 날에 학습한 내용을 정리하고 실습 과제를 기록한 리드미입니다.

## 🔖 오늘의 주제
> **CSS**

---

## 📚 배운 내용

### 🛠️ CSS

#### 🎨 CSS란?
CSS는 **Cascading Style Sheets**의 줄임말로, HTML 문서의 구조(뼈대)에 **디자인을 입히는 역할**을 함

- 웹사이트의 색상, 글꼴, 여백, 정렬, 레이아웃 등을 설정
- HTML은 구조만 있고, CSS가 있어야 보기 좋게 꾸며짐
- “Cascading(계단식)”이라는 이름처럼, **우선순위와 상속 규칙**이 있음

---

#### 1. 전체 선택자 (Universal Selector)  
CSS에서 *는 전체 선택자로, HTML 문서의 모든 요소에 스타일을 적용
주로 **초기화(Reset)**할 때 많이 사용함

```css
* {
  margin: 0;
  padding: 0;
  }
```
#### 2. `태그명` 선택자 (Tag Selector)
HTML 태그 이름 자체로 선택해서 스타일 적용

#### 3. 아이디명 ID 선택자
#id명 형태로, 하나의 유일한 요소에만 스타일을 줌
한 HTML 문서에 중복되면 안 됨

```css
#title {
color: blue;
}
```
#### 4. 클래스명 클래스 선택자
.로 시작하며 여러 요소에 반복 적용 가능한 스타일
하나의 HTML 문서 내에서 여러 개에 부여 가능

```css
.highlight {
background: yellow;
}
```

#### 5. CSS 가상 클래스 선택자 (Pseudo-class)
가상 클래스 선택자란 CSS에서 특정 상태이거나 조건에 해당하는 HTML 요소에 스타일을 적용할 수 있게 해주는 기능  
:로 시작하며, 실제 클래스가 아니라 조건에 의해 적용되는 클래스

```css
/*:hover — 마우스를 올렸을 때  */
/*:first-child — 부모 안에서 첫 번째 자식 요소  */
/*:nth-child(n) — n번째 자식  */
/*:focus — 포커스 됐을 때 (ex: 입력창 클릭)*/

a:hover {
color: red;
}
```

---
### 🛡️ `<a target="_blank">` 보안 취약점 설명
`<a href="..." target="_blank">`는 하이퍼링크 클릭 시 새 탭에서 열리게 하는 기능  
하지만 이렇게 열리는 **새 탭은 기존 탭(원본 페이지)**을 window.opener 객체를 통해 조작할 수 있는 권한을 가짐  
📛 이로 인해 발생하는 대표적 보안 취약점은:  
"Reverse Tabnabbing (역탭납치 공격)"  
공격 방식:
사용자가 `<a target="_blank">` 링크를 클릭
악성 사이트로 이동
해당 사이트에서 window.opener.location을 이용해 원래 페이지를 피싱 사이트로 변경  
🔐 해결 방법:
`rel="noopener noreferrer"` 속성을 같이 넣어야 함
```css
<a href="https://malicious.site" target="_blank" rel="noopener noreferrer">악성 링크</a>
```


## 📝 과제

**오늘의 과제**
> 클론코딩

💡 **실행 화면 캡처**
<img width="1379" alt="스크린샷 2025-06-16 오전 10 13 51" src="https://github.com/user-attachments/assets/d2a53471-963f-4e94-bc37-05417af2f1b6" />
---

## 💭 오늘의 회고
마음에 드는 결과물 🎀
