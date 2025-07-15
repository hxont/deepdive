# ☁️ Day 44
이 문서는 해당 날에 학습한 내용을 정리하고 실습 과제를 기록한 리드미입니다.

## 🔖 오늘의 주제
> **react**

---

## 📚 배운 내용
### 1. Zustand vs Redux Toolkit

|             | Redux Toolkit          | Zustand                                  |
| ----------- | ---------------------- | ---------------------------------------- |
| Provider 필요 | ✅ 필요 (Provider로 감쌈)    | ❌ 필요 없음                                  |
| 코드 복잡도      | 비교적 길고 복잡              | 매우 심플하고 짧음                               |
| 미들웨어        | 내장 (thunk, devtools 등) | devtools, persist, immer 등 외부 미들웨어 사용 가능 |
| 사용 방법       | createSlice, store 구성  | create() 하나로 끝                           |
| TypeScript  | 잘 지원                   | 잘 지원                                     |
| 파일 구조       | 주로 domain별 폴더링         | 자유롭게 가능                                  |

### 2. Zustand 기본 사용법
```javascript
import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (title) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), title }],
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
```
- create() → store 만드는 함수
- set() → 상태 바꾸는 함수
- custom hook 처럼 사용

### 3. Zustand + React 사용
#### Input 컴포넌트
```javascript
import React, { useState } from "react";
import { useTodoStore } from "../app/todoStore";

export default function TodoInput() {
  const [inputValue, setInputValue] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
}
```

#### List 컴포넌트
```javascript
import React from "react";
import { useTodoStore } from "../app/todoStore";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <button onClick={() => removeTodo(todo.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
}
```

### 4. Zustand 미들웨어
#### persist
- LocalStorage에 자동 저장
- 새로고침해도 데이터 유지

```javascript
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      filter: "all",
      setFilter: (filter) => set({ filter }),
    }),
    {
      name: "my-app-storage",
    }
  )
);
```

#### immer
- 불변성 관리 쉽게 해줌
```javascript
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useStore = create(
  immer((set) => ({
    todos: [],
    addTodo: (title) =>
      set((state) => {
        state.todos.push({ id: Date.now(), title });
      }),
  }))
);
```

#### devtools
- Redux DevTools 연동
- state 변경 추적
```javascript
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    { name: "counter-store" }
  )
);
```

### ✅ 정리
- Zustand는 Provider 없이 상태관리 가능
- Redux보다 훨씬 심플하고 가벼움
- 미들웨어:
  - persist → localStorage 저장/복원
  - immer → 불변성 관리 쉽게
  - devtools → 디버깅
- 전역 상태를 create() 하나로 만들고, 어디서든 불러다 쓰면 끝!
- 로그인 상태 관리 같은 전역 데이터 공유도 매우 쉬움

---

## 📝 과제

**오늘의 과제**
> 알고리즘 풀기

💡 **실행 화면 캡처**

<img width="654" height="263" alt="스크린샷 2025-07-11 오후 4 52 40" src="https://github.com/user-attachments/assets/2c28a5f5-f61e-4cf5-b821-bd488545495a" />


---

## 💭 오늘의 회고
복습 해야 되는데 🥲
