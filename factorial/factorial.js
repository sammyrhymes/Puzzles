let calcFactorial = (num) => {
    let factorial = 1;
    for (let i = 1; i < num + 1; i++){
        factorial *= i
    }
    return factorial;
}
 let showFactorial = (num) => {
    factorial  = calcFactorial(num);
    return console.log(factorial)
 }

showFactorial(4)
