# ☁️ Day 56
이 문서는 해당 날에 학습한 내용을 정리하고 실습 과제를 기록한 리드미입니다.

## 🔖 오늘의 주제
> **Next.js**

---

## 📚 배운 내용
### ✅ Markdown 파싱과 gray-matter
```gray-matter```: Markdown 파일의 front matter(메타데이터) 와 본문 내용을 분리해주는 라이브러리
```markdown
---
title: "제목"
date: "날짜"
tags: ["태그1", "태그2"]
---
본문 내용...
```
### ✅ 동적 라우팅 (파일명: [id].js)
1. getStaticPaths()
- 어떤 id를 가진 페이지를 미리 만들어둘지 정하는 함수
- params: { id: '1' } 이런 식으로 paths 배열 구성
- fallback: false: 없는 경로는 404 처리
2. getStaticProps()
- 각 id에 해당하는 데이터를 찾아서 props로 전달
- params.id를 이용해 데이터 찾음
3. BlogDetail 컴포넌트
- 전달된 props.board를 기반으로 상세 페이지 렌더링



--- 

## 📝 과제

**오늘의 과제**
>

💡 **실행 화면 캡처**




---

## 💭 오늘의 회고
아오 피곤해
