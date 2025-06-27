# ☁️ Day 18
이 문서는 해당 날에 학습한 내용을 정리하고 실습 과제를 기록한 리드미입니다.

## 🔖 오늘의 주제
> **JS**

---

## 📚 배운 내용
### 동기(Synchronous) vs 비동기(Asynchronous)
#### 🔹 동기(Synchronous)
➡️ 순서대로 차례차례 실행
- 자바스크립트 엔진은 단일 스레드(한 번에 하나의 작업만 처리)로 동작하며, 코드를 위에서부터 순서대로 순차 실행
- 앞선 작업이 모두 끝나야 다음 작업으로 넘어가기 때문에, 시간이 오래 걸리는 연산이 있으면 전체 실행이 지연됨
- 디버깅 관점에서는 코드 흐름이 직선적이고 예측 가능하지만, 긴 연산이 UI를 “멈춤” 상태로 만들 수 있다
#### 🔸 비동기(Asynchronous)
➡️ 기다리지 않고 다음 작업을 먼저 실행
- 시간이 오래 걸리는 작업을 백그라운드(별도 큐)에서 처리하고, 메인 스레드는 다른 코드를 계속 실행한다
- 작업이 완료되면 이벤트 루프(Event Loop) 와 태스크 큐(Task Queue) 를 통해 콜백(callback)이나 프로미스(Promise)가 호출되어 후속 처리를 진행한다
- UI가 멈추지 않고 여러 개의 작업을 병렬처럼 처리할 수 있지만, 코드 흐름이 복잡해 “콜백 지옥(callback hell)”에 빠질 수 있다    

#### 🔁 이벤트 루프(Event Loop)
➡️ 자바스크립트는 **단일 쓰레드**로 동작하지만,   
**Web API → Callback Queue → Event Loop → Call Stack** 순으로 
비동기 작업을 처리
작업이 Call Stack에서 모두 비워진 뒤 **Microtask를 먼저 전부 실행하고**, 그다음에 Task Queue에서 작업을 **하나씩** 실행

- Call Stack: 현재 실행 중인 함수 저장소
- Web API: setTimeout, fetch 같은 비동기 작업 실행 장소
- Callback Queue: 완료된 비동기 작업이 대기하는 큐
- Event Loop: Call Stack이 비었을 때 큐에서 하나씩 꺼내 실행

#### 🔥setTimeout
지정한 delay(밀리초)만큼 대기한 후, 한 번만 callback 함수를 실행     
타이머 ID(숫자 형태)를 반환하므로, 필요 시 clearTimeout(timerID)로 실행을 취소할 수 있음    
예시: “몇 초 뒤에 한 번만” 알람이 울리도록 예약하는 것

#### 🔥setInterval
지정한 delay(밀리초) 간격으로 callback 함수를 무한 반복 실행    
반환된 타이머 ID를 clearInterval(intervalID)로 전달하면 반복 실행을 중단할 수 있음   
예시: “몇 초마다 계속해서” 알람이 울리도록 예약하는 것

#### 💾 localStorage
브라우저가 제공하는 영속적(Local) 저장소로, **키-값(key-value)** 형태로 문자열 데이터를 저장할 수 있다  
저장된 데이터는 도메인별로 분리되어 보관
- **주요 메서드**
    - `localStorage.setItem(key, value)`
        - `key`에 문자열 `value`를 저장
    - `localStorage.getItem(key)`
        - 지정한 `key`의 값을 읽어온다. 존재하지 않으면 `null` 반환
    - `localStorage.removeItem(key)`
        - 해당 `key`를 삭제
    - `localStorage.clear()`
        - 현재 도메인의 모든 localStorage 데이터를 삭제
    - `localStorage.key(index)`
        - 저장된 키들 중 인덱스 `index`에 해당하는 키를 반환
    - `localStorage.length`
        - 저장된 키-값 쌍의 개수를 반환
- **문자열만 저장 가능**
    - 객체(Object)나 배열(Array)을 저장하려면, `JSON.stringify()`로 **문자열로 변환** 후 저장해야 함
    - 읽어올 때는 `JSON.parse()`로 다시 **객체/배열** 형태로 복원
- **주의사항**
    1. **보안**: 비밀번호나 개인 정보처럼 보안 민감 데이터는 절대 저장하지 않는다.
    2. **용량 제한**: 대용량 데이터를 저장하기엔 부족하다. (도메인당 5~10MB)
    3. **삭제 가능성**: 사용자가 브라우저 설정에서 직접 삭제할 수 있고, 사파리 같은 일부 브라우저의 사생활 보호 모드에서는 지원되지 않을 수 있다.

---

## 📝 과제

**오늘의 과제**
> 시계

💡 **실행 화면 캡처**

<img width="128" alt="스크린샷 2025-06-27 오전 9 36 19" src="https://github.com/user-attachments/assets/c417e057-94c8-47b7-96d9-c2729e6560a8" />

---

## 💭 오늘의 회고
🥲 피곤
