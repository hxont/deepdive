# ☁️ Day 53
이 문서는 해당 날에 학습한 내용을 정리하고 실습 과제를 기록한 리드미입니다.

## 🔖 오늘의 주제
> **react**

---

## 📚 배운 내용
### ✅ RTK Query 요약 정리
1. RTK Query란?   
Redux Toolkit에 포함된 API 서버 통신 라이브러리    
데이터를 fetch/axios처럼 가져오면서도 자동 상태관리 가능   
REST/GraphQL API 통신을 간단하고 유지보수 좋게 처리

2. RTK Query의 구조 흐름

   | 단계                 | 설명                          |
   | ------------------ | --------------------------- |
   | `createApi()`      | API 요청을 정의하는 핵심 함수          |
   | `fetchBaseQuery()` | fetch 기반 기본 통신 설정           |
   | `endpoints`        | 실제 사용할 API 요청들 (GET/POST 등) |
   | `useXXXQuery()`    | 자동 생성된 React 훅으로 데이터 요청     |

3. RTK Query를 사용하는 이유

   | 기존 방식 (axios 등)  | RTK Query                                 |
   | ---------------- | ----------------------------------------- |
   | useEffect로 시기 제어 | 자동 호출                                     |
   | useState로 상태 관리  | 자동 상태 관리 (`isLoading`, `isError`, `data`) |
   | axios 직접 작성      | 자동 `fetchBaseQuery()` 지원                  |
   | 로딩, 에러 처리 직접 구현  | 기본 제공                                     |
   | 전역 상태 따로 구성      | Redux에 자동 연동                              |



--- 

## 📝 과제

**오늘의 과제**
>

💡 **실행 화면 캡처**




---

## 💭 오늘의 회고
몸이 안 좋다
