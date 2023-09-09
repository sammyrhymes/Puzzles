function stringToNumber(inputString) {
    const parts = inputString.split(" ");
    if (parts.length !== 2) {
        throw new Error("Input must contain 2 parts separated by a space");
    }

    const firstPart = parts[0];
    const secondPart = parts[1];

    const secondPartInt = secondPart.slice(0, -1);
    const secondPartAscii = secondPart.charCodeAt(secondPart.length - 1);

    const firstPartAsAscii = Array.from(firstPart.slice(1)).map(char => char.charCodeAt(0)).join("");

    const combinedNumber = parseInt(firstPartAsAscii + secondPartAscii + secondPartInt);

    return combinedNumber;
}

function calculateTotalCarsBetweenPlates(plate1, plate2) {
    const plate1Number = stringToNumber(plate1);
    const plate2Number = stringToNumber(plate2);

    const number = plate2Number - plate1Number;
    const numberPart1 = parseInt(String(number).slice(0, 2)) + 1;
    const numberPart2 = parseInt(String(number).slice(2, 4)) + 1;
    const numberPart3 = parseInt(String(number).slice(4, 6)) + 1;
    const numberPart4 = parseInt(String(number).slice(6));

    const section1 = numberPart1 * numberPart2;
    const section2 = numberPart3 * numberPart4;
    const totalCars = section1 * section2;

    return totalCars;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first plate: ", function(plate1) {
    rl.question("Enter the second plate: ", function(plate2) {
        try {
            const totalCarsBetweenPlates = calculateTotalCarsBetweenPlates(plate1, plate2);
            console.log(`Total number of cars between ${plate1} and ${plate2}: ${totalCarsBetweenPlates}`);
        } catch (error) {
            console.error(`Error: ${error.message}`);
        } finally {
            rl.close();
        }
    });
});
