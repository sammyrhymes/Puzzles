// require the readline
const readline = require('readline');

// create an environment 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter ', (input) => {
    console.log(`you are a ${input}`);
    rl.close();
});