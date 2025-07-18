# ☁️ Day 48
이 문서는 해당 날에 학습한 내용을 정리하고 실습 과제를 기록한 리드미입니다.

## 🔖 오늘의 주제
> **react**

---

## 📚 배운 내용
### 1. React Hook Form
#### watch
- 모든 값이나 특정 필드 값 실시간 감시
- 쓰면 컴포넌트가 통째로 다시 렌더링됨 → 성능 부담

#### useWatch
- watch와 똑같이 실시간 감시
- 부분 컴포넌트만 리렌더링 가능 → 성능 좋음
- control 넘겨줘야 함

### 2. 👩‍🔧 FormError 컴포넌트
- 에러 메시지를 재사용할 수 있게 컴포넌트화
- 조건부 렌더링으로 에러 없으면 안 보임

```javascript
export default function FormError({ message }) {
  if (!message) return null;
  return <p style={{ color: 'red' }}>{message}</p>
}
```

### 3. Swiper 📍
**Swiper**란?   
슬라이더, 캐러셀, 다단계 폼 등에 쓰는 라이브러리   
반드시 ```import 'swiper/css'``` 해줘야 동작

```javascript
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

<Swiper>
  <SwiperSlide>슬라이드1</SwiperSlide>
  <SwiperSlide>슬라이드2</SwiperSlide>
</Swiper>
```


---

## 📝 과제

**오늘의 과제**
>

💡 **실행 화면 캡처**




---

## 💭 오늘의 회고
흑흑
