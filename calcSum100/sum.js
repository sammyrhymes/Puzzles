showTotal(1, 100);

function calcTotal(num1 , num2){
    let total = 0;
    for (let i = num1; i<=num2; i++){
        total += i;
    }
    return total
}

function showTotal(num1 , num2){
    total = calcTotal(num1, num2);
    return console.log(total);
}

