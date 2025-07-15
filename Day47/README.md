# ☁️ Day 47
이 문서는 해당 날에 학습한 내용을 정리하고 실습 과제를 기록한 리드미입니다.

## 🔖 오늘의 주제
> **react**

---

## 📚 배운 내용
### 1. react-hook-form
- useForm() → React 폼 상태를 관리하는 훅
- 주요 메서드
  - register → input, select 연결 (native 태그용)
  - handleSubmit → form submit 처리
  - watch, useWatch → 실시간으로 값 관찰
- 외부 컴포넌트 (예: react-select)는 register로 연결 불가 → Controller 써야 함

### 2. 외부 라이브러리 연결 → Controller
```javascript
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

const options = [
  { value: '초콜릿', label: '초콜릿' },
  { value: '딸기초콜릿', label: '딸기초콜릿' },
];

export default function Example() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="food"
        control={control}
        render={({ field }) => (
          <Select {...field} options={options} placeholder="맛을 선택하세요" />
        )}
      />
      <button type="submit">제출</button>
    </form>
  );
}
```

### 3. useFormContext
- 상위 컴포넌트에서 FormProvider로 context 생성
- 하위 컴포넌트에서 useFormContext()로 동일한 useForm 상태를 공유
- 장점 → 여러 단계 컴포넌트 간 코드 중복 제거

```javascript
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

function Parent() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Child />
    </FormProvider>
  );
}

function Child() {
  const { register } = useFormContext();
  return <input {...register('name')} />;
}
```

### 4. MultiStep Form 구조
다단계 폼 → 한 번에 입력하지 않고 step별로 나눠서 입력
1. Zustand → currentStep, formData 관리
2. useForm → form state 관리
3. FormProvider로 context 전달
4. 각 Step 컴포넌트
- useFormContext로 값 접근
- Controller로 react-select 연결
5. “다음” 클릭 시
- 현재 step 값 Zustand에 저장
- nextStep
6. 마지막 step → 모든 formData 출력



---

## 📝 과제

**오늘의 과제**
>

💡 **실행 화면 캡처**




---

## 💭 오늘의 회고
흑흑
