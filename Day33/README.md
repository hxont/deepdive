# ☁️ Day 33
이 문서는 해당 날에 학습한 내용을 정리하고 실습 과제를 기록한 리드미입니다.

## 🔖 오늘의 주제
> **react**

---

## 📚 배운 내용
### useReducer
복잡한 상태 로직을 reducer(상태 변경 함수) + dispatch(액션 전송 함수) 패턴으로 관리하게 해줌
- 상태(state)와 액션(action)을 분리해 `reducer(state, action) → newState` 로직을 한곳에 모으고,
- `dispatch({ type, payload })` 호출로 상태를 업데이트합니다.

  이로써 `useState` 여러 개로 흩어진 상태 관리 코드를 깔끔하게 중앙 집중화할 수 있습니다.

#### 🔄 실행의 순서
1. 컴포넌트 렌더 → `useReducer(reducer, initialState)` 호출 → `[state, dispatch]` 준비
2. 유저 이벤트·이펙트 등에서 `dispatch(action)` 호출
3. React가 `reducer(prevState, action)` 실행 → `newState` 반환
4. 상태가 바뀌면 컴포넌트 재렌더 → 화면 업데이트



---

## 📝 과제

**오늘의 과제**
> 클론코딩

💡 **실행 화면 캡처**      




---

## 💭 오늘의 회고
어려워
