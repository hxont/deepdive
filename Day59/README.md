# ☁️ Day 59
이 문서는 해당 날에 학습한 내용을 정리하고 실습 과제를 기록한 리드미입니다.

## 🔖 오늘의 주제
> **Next.js**

---

## 📚 배운 내용
### 폼 구성 (WriteForm)
- /api/hello 경로로 POST 요청을 보내는 <form>을 만듦.
- 상품명(title)과 가격(price)을 입력받음.

### API 핸들러
- POST 요청이 들어오면:
    - req.body에서 title, price 추출
    - MongoDB에 연결하고, my-shop DB의 products 컬렉션에 insertOne()으로 문서 저장 
    - 완료되면 /로 리디렉션 (res.redirect(302, '/'))

### 환경 변수 (.env.local)
- MONGODB_URI: 데이터베이스 연결 주소
- NEXT_PUBLIC_으로 시작하면 프론트에서 사용 가능
- 비밀번호 등 민감 정보는 절대 노출 금지 (브라우저에서도 안 보이게)


--- 

## 📝 과제

**오늘의 과제**
>

💡 **실행 화면 캡처**




---

## 💭 오늘의 회고
TIL~
