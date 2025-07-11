# ☁️ Day 32
이 문서는 해당 날에 학습한 내용을 정리하고 실습 과제를 기록한 리드미입니다.

## 🔖 오늘의 주제
> **react**

---

## 📚 배운 내용
### 🔥useRef
useRef는 React Hook 중 하나로, 렌더링과 무관하게 값을 저장하거나 DOM 요소에 직접 접근할 때 사용
- 호출 시 { current: 초기값 } 형태의 객체를 반환하며, 이 객체는 컴포넌트가 언마운트될 때까지 유지
- `.current` 프로퍼티를 변경해도 리렌더링이 발생하지 않아, 불필요한 렌더링을 방지할 수 있음
- `useState`는 값을 바꾸면 화면이 다시 그려지지만, useRef는 값을 바꿔도 화면이 그대로 유지

- **🎯사용 상황 및 예외 처리**
    - **DOM 요소 제어**: 입력창 자동 포커스, 스크롤 위치 측정·조정
    - **이전 값 보관**: 직전 상태 비교(이전 카운트, 이전 스크롤 위치 등)
    - **외부 인스턴스 관리**: 타이머 ID, WebSocket/Chart.js 인스턴스 저장
    - **예외 처리**: `ref.current`가 `null`일 수 있으니, 접근 전 `if (ref.current)` 체크

| 구분           | **useRef**              | **useState**         |
| ------------ | ----------------------- | -------------------- |
| **렌더링 유발**   | ❌ 리렌더링 없음               | ✅ setState 시 무조건 렌더링 |
| **값 보관 지속성** | ⭑ 마운트→언마운트 전체 주기 동안 유지  | ⭑ 언마운트 전까지만 유지       |
| **적합한 용도**   | DOM 제어, 외부 인스턴스·이전 값 저장 | UI 상태 관리(즉시 화면 반영)   |
| **무한 루프 위험** | ❌ 없음                    | ⚠️ 잘못 쓰면 무한 루프 가능    |
| **간단성**      | ⭕ 가볍고 직관적               | ❌ 상태 로직 복잡해질 수 있음    |

#### 1. 입력창에 포커스 이동
📌 버튼을 누르면 입력창에 자동으로 커서가 들어감

| 구분     | 내용                      |
| ------ | ----------------------- |
| **장점** | 렌더링 없이 DOM 조작 가능        |
|        | 직접적으로 포커스, 스크롤 등 가능     |
| **단점** | 너무 많이 쓰면 React 철학에서 벗어남 |
|        | 상태값 추적에는 부적합            |

#### 2. ⏰ 타이머 (setInterval)
📌 버튼을 누르면 1초마다 숫자가 올라감

| 구분     | 내용                     |
| ------ | ---------------------- |
| **장점** | 렌더링 없이 타이머 ID 유지 가능    |
|        | 클린업 없이도 쉽게 제어 가능       |
| **단점** | 타이머 종료 안 하면 메모리 누수 위험  |
|        | setState 안 쓰면 화면엔 안 보임 |


#### 3. 💬 자동 채팅 스크롤
📌 채팅이 추가되면 자동으로 맨 아래로 스크롤

| 구분     | 내용                  |
| ------ | ------------------- |
| **장점** | 매우 자연스러운 UX 구현 가능   |
|        | DOM 조작과 React 병행 가능 |
| **단점** | 오래된 메시지는 비동기 로딩 필요  |
|        | 컴포넌트 리사이징 주의 필요     |

#### 4. 🔁 이전 값 저장
📌 버튼을 누르면 현재 값과 이전 값을 함께 보여줌

| 구분     | 내용                   |
| ------ | -------------------- |
| **장점** | 렌더링 안 해도 값 저장 가능     |
|        | 이전 상태 기록할 때 유용       |
| **단점** | state처럼 화면에 바로 반영 안됨 |
|        | 조건 판단 잘못하면 오류 가능     |


---

## 📝 과제

**오늘의 과제**
> 클론코딩

💡 **실행 화면 캡처**



---

## 💭 오늘의 회고
으아 너무 많아 💦
