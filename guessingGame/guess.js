function isCorrect(guess, num){
    if (guess == num){
        console.log("congratulations")
    }
}

function isHigh(guess, num){
    if (guess > num){
        console.log("Try lower!")
    }
}

function isLow(guess, num){
    if (guess < num){
        console.log("Try Higher!")
    }
}

function guessNumber(guess){
    const num = Math.random(1, 11)
    while (true){
        if (isCorrect(guess, num)){
            break
        }
        else{
            isHigh(guess, num);
            isLow(guess, num);
        }
    }
}