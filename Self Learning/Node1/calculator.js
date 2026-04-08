const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", function (num1) {

    rl.question("Enter second number: ", function (num2) {

        rl.question("Enter operation (+, -, *, /): ", function (op) {

            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            let result;

            if (op === "+") {
                result = num1 + num2;
            } else if (op === "-") {
                result = num1 - num2;
            } else if (op === "*") {
                result = num1 * num2;
            } else if (op === "/") {
                result = num1 / num2;
            } else {
                console.log("Invalid operation");
                rl.close();
                return;
            }

            console.log("Result:", result);

            rl.close(); 
        });
    });
});