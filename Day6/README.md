# ☁️ Day 6
이 문서는 해당 날에 학습한 내용을 정리하고 실습 과제를 기록한 리드미입니다.

## 🔖 오늘의 주제
> **HTML**

---

## 📚 배운 내용

### 🛠 HTML의 `<head>` 태그 내부를 중심으로 웹페이지의 정보, 디자인, 외부 연결을 설정하는 법

#### 1. `<meta>` 태그
`<meta>`는 **HTML 문서의 메타데이터(metadata)** 를 정의하는 태그
메타데이터는 브라우저나 검색 엔진이 참고하는 **문서의 정보**
화면에 보이지 않지만, 검색엔진 노출, 반응형 설정, 인코딩 등에 중요하다

```html
<meta charset="UTF-8"> <!-- 한글 등 다양한 언어를 표현 가능 -->
<meta name="keywords" content="HTML, CSS, REACT"> <!-- SEO 키워드 -->
<meta name="description" content="훈티"> <!-- 검색결과 설명 -->
<meta name="author" content="hxont"> <!-- 문서 작성자 -->
```

#### 2. `<link>` 태그
`<link>`는 HTML 문서와 외부 파일(CSS, 아이콘, 폰트 등)을 연결해주는 태그
`rel="stylesheet"`는 이 링크가 **스타일시트(CSS)** 임을 나타냄 href는 불러올 외부 파일의 경로(URL)를 지정

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
```

#### 3. `<style>` 태그
`<style>`은 HTML 문서 내부에 CSS를 직접 작성할 수 있는 영역
body, p, div 등 HTML 태그에 대해 색상, 글꼴, 정렬 등 시각적 스타일을 지정할 수 있다
```html
<style>
  body {
    background-color: palevioletred;
    color: white;
  }
</style>
```

---

## 📝 과제

**오늘의 과제**
> 클론코딩

💡 **실행 화면 캡처**   
<img width="1180" alt="스크린샷 2025-06-11 오후 5 49 01" src="https://github.com/user-attachments/assets/2a6e72d0-faff-474f-8e4e-cc6f01c389a5" />

---

## 💭 오늘의 회고
meta 태그 존재의 이유를 처음 알게 되었다 🐰
