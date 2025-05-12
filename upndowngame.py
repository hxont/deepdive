import random

computer_answer = random.randint(1, 100)
you_answer = int(input("1부터 100까지 입력하세요"))

if you_answer == computer_answer:
    print("정답입니다!")
elif you_answer > computer_answer:
    print("down")
else:
    print("up")
