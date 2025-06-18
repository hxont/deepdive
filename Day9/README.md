# ☁️ Day 9
이 문서는 해당 날에 학습한 내용을 정리하고 실습 과제를 기록한 리드미입니다.

## 🔖 오늘의 주제
> **css**

---

## 📚 배운 내용

### SEO 설정
Search Engine Optimization (검색 엔진 최적화)  
→ 검색 결과 상위 노출을 위한 HTML 구성 방식  
#### ✅ SEO란?   
구글, 네이버 등에서 검색 시 상위에 노출되게 하는 기술   
페이지 구조, 키워드, 링크 등을 최적화함  
#### 🔧 SEO 3단계 
- 🛠 기술적 SEO  
HTML 구조, meta 태그, 페이지 속도, 반응형 등  
- ✍ 콘텐츠 SEO   
제목, 키워드, 본문 구성 최적화  
- 🔗 외부 SEO  
외부 사이트로부터의 링크 수와 신뢰도  

🏷 META & OG 태그 요약
- `<meta name="description">` 사이트 요약 설명
- `<meta name="author">` 작성자 이름
- `<link rel="shortcut icon">` 브라우저 탭 아이콘 설정
- `<meta property="og:title">` 공유 시 표시될 제목
- `<meta property="og:image">` SNS 공유 시 썸네일 이미지
- `<meta property="og:url">` 공유 링크의 대상 U

---

### 📱 반응형 웹 디자인 & 미디어쿼리 완벽 정리
**@media**는 CSS에서 조건에 따라 **다른 스타일을 적용할 수 있게 하는 핵심 기술**
이를 통해 다양한 **디바이스 종류(PC, 모바일, 태블릿)**와 **디바이스 상태(너비, 방향, 해상도, 입력 방식 등)**에 따라 웹사이트의 레이아웃과 스타일을 반응적으로 조절할 수 있다

#### 📐 Mobile First Method (min-width)
```css
/* Custom, iPhone Retina */
@media only screen and (min-width : 320px) {}

/* Extra Small Phones */
@media only screen and (min-width : 480px) {}

/* Small Tablets */
@media only screen and (min-width : 768px) {}

/* Medium Desktops */
@media only screen and (min-width : 992px) {}

/* Large Screens */
@media only screen and (min-width : 1200px) {}
```
#### 🔁 Non-Mobile First Method (max-width)
```css
/* 801px 이상: 기본 스타일 */
* { color: black; }

/* 800px 이하 */
@media screen and (max-width: 800px) {
* { color: blue; }
  }

/* 480px 이하 */
@media screen and (max-width: 480px) {
* { color: red; }
  }
```
---

## 📝 과제

**오늘의 과제**
> 클론코딩

💡 **실행 화면 캡처**  
<img width="1058" alt="스크린샷 2025-06-16 오후 1 26 27" src="https://github.com/user-attachments/assets/44cd4235-9e75-4957-871c-4e502e1436ba" />
---

## 💭 오늘의 회고
사진 사라짐 이슈 🥲
