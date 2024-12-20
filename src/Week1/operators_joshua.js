// Arithmetic Operators
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }
function modulus(a, b) { return a % b; }

console.log("Addition:", add(10, 5)); // 15
console.log("Subtraction:", subtract(10, 5)); // 5
console.log("Multiplication:", multiply(10, 5)); // 50
console.log("Division:", divide(10, 5)); // 2
console.log("Modulus:", modulus(10, 3)); // 1

// Assignment Operators
let investment = 1000;
investment += 500; // Adds 500
console.log("Investment after += 500:", investment); // 1500

investment -= 200; // Subtracts 200
console.log("Investment after -= 200:", investment); // 1300


/*
Exercise 1:
Write functions to demonstrate each assignment operator with different scenarios, such as increasing investment based on user actions.
*/

// Function to demonstrate the += operator
function increaseInvestment(investment, amount) {
    investment += amount;
    console.log(`Investment after increasing by ${amount}:`, investment);
    return investment;
}

// Function to demonstrate the -= operator
function decreaseInvestment(investment, amount) {
    investment -= amount;
    console.log(`Investment after decreasing by ${amount}:`, investment);
    return investment;
}

// Function to demonstrate the *= operator
function multiplyInvestment(investment, multiplier) {
    investment *= multiplier;
    console.log(`Investment after multiplying by ${multiplier}:`, investment);
    return investment;
}

// Function to demonstrate the /= operator
function divideInvestment(investment, divisor) {
    investment /= divisor;
    console.log(`Investment after dividing by ${divisor}:`, investment);
    return investment;
}

// Function to demonstrate the %= operator
function modulusInvestment(investment, divisor) {
    investment %= divisor;
    console.log(`Investment after modulus ${divisor}:`, investment);
    return investment;
}

// Initial investment amount
let investmentAmount = 1000;

// Example scenarios
investmentAmount = increaseInvestment(investmentAmount, 500);  // Increases investment by 500
investmentAmount = decreaseInvestment(investmentAmount, 200);  // Decreases investment by 200
investmentAmount = multiplyInvestment(investmentAmount, 1.5);  // Multiplies investment by 1.5
investmentAmount = divideInvestment(investmentAmount, 2);      // Divides investment by 2
investmentAmount = modulusInvestment(investmentAmount, 3);     // Finds modulus of investment by 3


/*
Exercise 2:
Create a simple calculator that takes two numbers and an operator as input and returns the result using the appropriate operator.
*/
function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '%':
            return num1 % num2;
        default:
            return "Invalid operator. Please use one of +, -, *, /, %";
    }
}

// Example Usage
let number1 = 10;
let number2 = 5;

console.log("Addition: ", calculator(number1, number2, '+'));     // 15
console.log("Subtraction: ", calculator(number1, number2, '-'));  // 5
console.log("Multiplication: ", calculator(number1, number2, '*'));// 50
console.log("Division: ", calculator(number1, number2, '/'));     // 2
console.log("Modulus: ", calculator(number1, number2, '%'));      // 0
