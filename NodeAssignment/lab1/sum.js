const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
let sum = 0;
readline.question('Please enter number:', num => {
    sum = parseInt(num);
    getNumber();
    
});

function getNumber() {
    readline.question("Please enter number:", num => {
        if (num === "stop") {
            console.log(sum);
            readline.close();
        }
        else {
            sum += parseInt(num);
            getNumber();
        }
    });
}