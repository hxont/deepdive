# ☁️ Day 31
이 문서는 해당 날에 학습한 내용을 정리하고 실습 과제를 기록한 리드미입니다.

## 🔖 오늘의 주제
> **react**

---

## 📚 배운 내용
### ✅ 1. React Context란?
`Context`는 컴포넌트들 사이에 **공통 데이터(예: 유저정보, 다크모드 설정 등)**를 전달할 때 사용하는 **전역 상태 관리 도구**   
`props`로 계속 넘기지 않고, 바로바로 공유할 수 있음

### Context 사용 방법
1) Context 생성
```javascript
const AppContext = createContext();
```
2) Provider로 감싸기
```javascript
javascriptfunction AppProvider({ children }) {
   const [user, setUser] = useState('서희');
   const [theme, setTheme] = useState('dark');
   const [lang, setLang] = useState('ko');

const value = { user, setUser, theme, setTheme, lang, setLang };

return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
);
}
```
3) Context 사용하기
```javascript
function useAppContext() {
  return useContext(AppContext);
}
```


---

## 📝 과제

**오늘의 과제**
> 클론코딩

💡 **실행 화면 캡처**      




---

## 💭 오늘의 회고

