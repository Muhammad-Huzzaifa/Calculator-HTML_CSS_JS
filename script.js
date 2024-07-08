let string = '';
let number1 = 0, number2 = 0, result = 0;
let operator = '';
let count = 0;

function append(number) {
    string += number;
    document.getElementById("display").innerText = string;
}

function sign(sign) {
    if (count == 0) {
        result = parseFloat(string);
        string = '';
        count++;
        operator = sign;
        return;
    }

    switch (sign) {
        case '+':
            number1 = result;
            number2 = parseFloat(string);
            operator = '+';
            result = number1 + number2;
            break;
        case '-':
            number1 = result;
            number2 = parseFloat(string);
            operator = '-';
            result = number1 - number2;
            break;
        case '*':
            number1 = result;
            number2 = parseFloat(string);
            operator = '*';
            result = number1 * number2;
            break;
        case '/':
            number1 = result;
            number2 = parseFloat(string);
            if (number2 === 0) {
                document.getElementById("display").innerText = "Error";
                return;
            }
            operator = '/';
            result = number1 / number2;
            break;
    }
    string = '';
    document.getElementById("display").innerText = result;
}

function clear_() {
    number1 = 0;
    number2 = 0;
    result = 0;
    string = '';
    count = 0;
    operator = '';
    document.getElementById("display").innerText = string;
}

function calculate() {
    number1 = result;
    number2 = parseFloat(document.getElementById("display").innerText);
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                document.getElementById("display").innerText = "Error";
                return;
            }
            result = number1 / number2;
            break;
    }
    document.getElementById("display").innerText = result;
    string = result.toString();
    operator = '';
    count = 0;
}
