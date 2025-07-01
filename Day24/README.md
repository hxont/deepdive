# ☁️ Day 24
이 문서는 해당 날에 학습한 내용을 정리하고 실습 과제를 기록한 리드미입니다.

## 🔖 오늘의 주제
> **react**

---

## 📚 배운 내용
### 🌐 AJAX (비동기 통신)
AJAX = Asynchronous JavaScript and XML   
웹페이지가 전체 새로고침 없이도 서버와 데이터를 주고받게 해주는 기술

```
import React, { useEffect, useState } from 'react';

export default function Example() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
  }, []);

  return (
    <div>
      <h1>유저 목록</h1>
      {users.map(user => (
        <p key={user.id}>
          이름: {user.name}, 이메일: {user.email}
        </p>
      ))}
    </div>
  );
}
```




---

## 📝 과제

**오늘의 과제**
> 클론코딩

💡 **실행 화면 캡처**



---

## 💭 오늘의 회고
🥲 피곤
