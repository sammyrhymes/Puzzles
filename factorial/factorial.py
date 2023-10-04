num = int(input("input any number: "))

def calcFactorial(num):
    factorial = 1

    for i in range(1, num+1):
        factorial *= i
    
    return factorial 

def showFactorial(num):
    factorial = calcFactorial(num)
    return print(factorial)

showFactorial(num)