import random

num = random.choice(range(1, 11))
while True:
    guess = int(input("Guess a number between 1 and 10: "))
    if num == guess:
        print(f"congratulations! {num}")
        break
    elif guess > num:
        print("close but a bit lower")
    else:
        print("A bit higher")