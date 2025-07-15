# ☁️ Day 45
이 문서는 해당 날에 학습한 내용을 정리하고 실습 과제를 기록한 리드미입니다.

## 🔖 오늘의 주제
> **react**

---

## 📚 배운 내용
### 1. Zustand 기본 스토어 생성
```javascript
import { create } from "zustand";

export const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

### 2. 상태 불변성 관리 - immer
Zustand + immer → 불변성 신경 안 쓰고, state 직접 수정하듯 작성 가능!
```javascript
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useStore = create(
  immer((set) => ({
    todos: [],
    addTodo: (text) =>
      set((state) => {
        state.todos.push({ text, done: false });
      }),
  }))
);
```

### 3. 로컬스토리지 동기화 - persist
페이지 새로고침해도 state 유지하고 싶다면 persist 사용
```javascript
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      filter: 'all',
      setFilter: (filter) => set({ filter }),
    }),
    {
      name: 'my-app-storage', // localStorage key 이름
    }
  )
);
```

### 4. 개발자 도구 연동 - devtools
Redux DevTools와 연동 가능    
→ 상태 변경 추적, 디버깅에 좋음
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

### 5. logger 미들웨어
상태 변경 시 console에 이전/이후 값 출력 → 디버깅에 유용

### 6. 미들웨어 여러 개 합치기
```javascript
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useTotalStore = create(
  devtools(
    persist(
      immer((set, get) => ({
        // 상태와 액션 작성
      })),
      { name: 'total-store' }
    )
  )
);
```

### 7. BoardStore 구현
#### addPost
```javascript
addPost: (title, content) =>
  set((state) => {
    state.posts.push({
      id: state.currentId++,
      title,
      content,
    });
  })
```

#### deletePost
```javascript
deletePost: (id) =>
  set((state) => {
    state.posts = state.posts.filter((post) => post.id !== id);
  })
```

#### updatePost
```javascript
updatePost: (id, title, content) =>
  set((state) => {
    const post = state.posts.find((p) => p.id === id);
    if (post) {
      post.title = title;
      post.content = content;
    }
  })
```

### 8. BoardForm 컴포넌트
- 새 글 작성
- 기존 글 수정
- 저장 후 input 초기화
- 수정 모드일 땐 editingPost 값 채워서 폼 초기화

### 9. BoardItem 컴포넌트
- post.title, post.content 출력
- 수정, 삭제 버튼 추가
- 클릭 시 setEditingPost 혹은 deletePost 호출

### ✅ 미들웨어란?
상태 관리와 실제 사용 사이에 끼어들어 부가 기능 제공
- persist → localStorage 저장/복원
- immer → 불변성 관리
- devtools → 상태 추적
- logger → 콘솔 로깅

### ✅ 번들이란?
여러 개의 JS 모듈 → 하나(또는 몇 개)로 합침
- 네트워크 요청 최소화
- 최신 문법 → 구버전 브라우저 호환
- 코드 압축, 최적화

---

## 📝 과제

**오늘의 과제**
> 알고리즘 풀기

💡 **실행 화면 캡처**

<img width="307" height="138" alt="스크린샷 2025-07-11 오후 4 48 00" src="https://github.com/user-attachments/assets/aeb568ca-4a55-4f42-ad62-a59441d96e2f" />



---

## 💭 오늘의 회고
오늘 할 일이 너무 많았다
