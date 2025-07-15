# ☁️ Day 43
이 문서는 해당 날에 학습한 내용을 정리하고 실습 과제를 기록한 리드미입니다.

## 🔖 오늘의 주제
> **react**

---

## 📚 배운 내용
### 1. Redux Toolkit
- Redux 공식 툴킷 라이브러리
- Redux 사용을 더 쉽고, 코드 간결하게 만들어 줌
- 핵심 기능
  - createSlice
  - configureStore
  - createAsyncThunk

### 2. createSlice()
상태 + 리듀서 + 액션 생성을 한 번에!
```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: Date.now(),
        title: action.payload,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
```

### 3. Store 설정
slice를 store에 등록해야 함
```javascript
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
```

### 4. Redux 사용하기
#### ✅ useDispatch
- 액션 실행
```javascript
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

const dispatch = useDispatch();
dispatch(addTodo("할 일 내용"));
```

#### ✅ useSelector
- store에서 state 값 가져오기
```javascript
import { useSelector } from "react-redux";

const { todos, isLoading, error } = useSelector((state) => state.todos);
```
### 5. 미들웨어란?
액션 → 리듀서 사이에 끼어들어 추가 작업을 수행

### 6. createAsyncThunk
비동기 작업을 쉽게 작성하는 Redux Toolkit 함수
✅ 특징
- 3단계 액션을 자동 생성
  - pending
  - fulfilled
  - rejected

### ✅ Redux Toolkit ToDo 동작 흐름
```
사용자 입력
     ↓
dispatch(addTodo())
     ↓
slice.reducer 실행 → state.todos에 추가
     ↓
useSelector()로 화면에 출력
```

### ✅ Redux Toolkit로 변경 시 장점
✅ 액션 생성 + 리듀서 관리가 한 곳에서 가능 (createSlice)    
✅ 코드가 짧아지고 가독성 상승   
✅ 불변성 관리 자동 처리 (Immer 내장)    
✅ 비동기 작업을 쉽게 작성 가능 (createAsyncThunk)




---

## 📝 과제

**오늘의 과제**
>

💡 **실행 화면 캡처**




---

## 💭 오늘의 회고
힝힝힝힝힝
