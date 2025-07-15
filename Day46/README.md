# ☁️ Day 46
이 문서는 해당 날에 학습한 내용을 정리하고 실습 과제를 기록한 리드미입니다.

## 🔖 오늘의 주제
> **react**

---

## 📚 배운 내용
### 💬 폼 관리
#### (1) Controlled Components
- React의 state로 input 값을 관리
- value, onChange를 직접 설정
- 장점
  - 상태 관리가 명확하고 일관됨
  - 유효성 검사, 동기화 처리 쉽다 
- 단점
  - 상태(state)가 많아지면 코드 복잡
  - 입력 많을수록 리렌더링 많아져 성능 저하

#### (2) Uncontrolled Components
- React가 값 관리하지 않음 → DOM이 직접 값 보관
- 필요할 때 ref로 값을 꺼내 쓴다
- 장점
  - 코드 간단
  - 리렌더링 적어서 성능 유리
- 단점
  - 복잡한 폼 처리에는 부적합

### 2. react-hook-form
- 리액트 폼 관리 라이브러리
- 최소 코드로
  - 입력값 추적
  - 유효성 검사
  - 에러 관리
- Controlled보다 훨씬 가볍고 성능 좋음

#### (1) useForm()
리턴값 :
```javascript
const {
  register,         // input 등록
  handleSubmit,     // onSubmit 처리
  watch,            // 실시간 값 추적
  reset,            // 폼 초기화
  setValue,         // 특정 값 변경
  getValues,        // 모든 값 가져오기
  trigger,          // 수동 유효성 검사
  setError,         // 에러 수동 설정
  clearErrors,      // 에러 제거
  formState: {
    errors,         // 에러 정보
    isDirty,        // 값이 바뀌었는지 여부
    isValid,        // 전체 유효성 여부
    isSubmitting,   // 제출 중 여부
    touchedFields,  // 터치된 필드
    dirtyFields,    // 값이 바뀐 필드
  },
  control,          // 외부 컴포넌트용 Controller
} = useForm();
```

#### (2) register
- input, select, radio 등과 연결
- value, onChange, ref 자동 처리
- 유효성 옵션 작성 가능

```javascript
<input
  {...register('username', { required: '이름은 필수입니다' })}
/>
{errors.username && <p>{errors.username.message}</p>}
```

#### (3) handleSubmit
- 폼 제출 이벤트 감싸줌
- 유효성 통과 → onSubmit 실행
- 실패 → errors에 메시지 기록

#### (4) 유효성 옵션

| 옵션        | 설명      |
| --------- | ------- |
| required  | 필수 여부   |
| minLength | 최소 글자 수 |
| maxLength | 최대 글자 수 |
| pattern   | 정규표현식   |
| validate  | 커스텀 검증  |
| min / max | 숫자 범위   |

#### (5) 커스텀 검증
```javascript
<input
  type="password"
  {...register('password', {
    required: '비밀번호 입력!',
    validate: value =>
      [/[A-Z]/, /[a-z]/, /[0-9]/, /[^A-Za-z0-9]/].every(pattern =>
        pattern.test(value)
      ) || '영대소문자, 숫자, 특수문자 포함'
  })}
/>
```




---

## 📝 과제

**오늘의 과제**
>

💡 **실행 화면 캡처**




---

## 💭 오늘의 회고
힝
