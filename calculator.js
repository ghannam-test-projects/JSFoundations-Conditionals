// Define the numbers and the operation here
let firstNumber = 9;
let secondNumber = 9;
let operation = "/";

let result;

if (operation == "+"){
    result = firstNumber+secondNumber;
    console.log(`the result of ${firstNumber} added to ${secondNumber} is ${result}`)

}else if (operation == "-"){
    result = firstNumber-secondNumber;
    console.log(`the result of ${firstNumber} sustracted from ${secondNumber} is ${result}`)
}else if (operation == "/"){
    result = firstNumber/secondNumber;
    console.log(`the result of ${firstNumber} devided by ${secondNumber} is ${result}`)
}else if (operation == "*"){
    result = firstNumber*secondNumber;
    console.log(`the result of ${firstNumber} multiplied by ${secondNumber} is ${result}`)
}
else{
    console.log("invalid result");
}

console.log(`Do you want to do more operations to the result ${result}?`);
