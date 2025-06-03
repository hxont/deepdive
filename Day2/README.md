# ☁️ Day 2

## 🔖 오늘의 주제
> **Git 기본 명령어 정리**

---

## 📚 배운 내용

### 🛠️ Git 기본 명령어 정리

---
#### 1. git init

- 현재 디렉터리를 Git 저장소로 초기화한다.  
  .git 폴더가 생성되며, Git이 이 폴더를 통해 버전 관리를 시작한다.

bash
git init

---

#### 2. git add

- 변경된 파일을 스테이징 영역(Staging Area)에 올리는 명령어.  
  커밋을 하기 전에 어떤 파일을 포함시킬지 선택하는 단계이다.

bash
# 특정 파일 추가
git add filename.txt

# 현재 디렉토리 내 모든 변경 파일 추가
git add .

---

#### 3. git diff

- 작업 중인 파일과 스테이징 영역, 또는 이전 커밋 간의 차이를 보여준다.  
  변경된 내용을 확인하고 실수나 누락이 없는지 점검할 때 유용하다.

bash
# 워킹 디렉토리와 스테이징 영역의 차이점 보기
git diff

# 스테이징 영역과 최종 커밋 간의 차이점 보기
git diff --staged

---

#### 4. git commit 📝

- 스테이징된 파일들을 커밋(버전)으로 저장한다.  
  각 커밋에는 고유한 해시값이 부여되고, 메시지를 통해 변경 내용을 설명한다.

bash
# 기본 커밋
git commit -m "커밋 메시지"

# 변경된 추적 파일을 add + commit 동시에
git commit -am "커밋 메시지"

---

## 📝 과제

> **오늘의 과제**
1. new repository에 commit까지 완료하기

> 💡 **실행 화면 캡처**

<img width="541" alt="day2" src="https://github.com/user-attachments/assets/43dfa127-b461-481b-8b31-b4fca1a6c0b1" />

---

## 💭 오늘의 회고

> staging area 개념을 드디어 이해함 🚀
