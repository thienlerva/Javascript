
$('#fiboSubmit').on('click', runFib);
$('#bubbleSubmit').on('click', runBubble);

function runFib() {
    var n = $('#fiboInput').val();
    $('#fiboOutput').html(fibonacci(n));
    
    var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
}

function fibonacci(n) {
    if (n==0 || n==1) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

// Problem 2
var myVar = setInterval(function(){
    var d = new Date();
    $('#timeOutput').html(d.toLocaleTimeString());
}, 1000);

// Problem 3 
function runBubble() {
    var str = $('#bubbleInput').val();
    let arr = extractStringArray(str);
    let formatStr = bubbleSort(arr);
    $('#bubbleOutput').html(formatArray(formatStr));
}

function extractStringArray(arr) {
    let strArr = arr.split(',');
    let numArr = new Array(strArr.length);

    for(let i = 0; i < strArr.length; i++) {
        numArr[i] = Number(strArr[i]);
    }
    return numArr;
}

function bubbleSort(arr) {
    let len = arr.length;

    for(let i = 0; i < len - 1; i++) {
        for(let j = i + 1; j < len; j++) {
            if(arr[i] >arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

function formatArray(arr) {
    var str = "";
    for(let i = 0; i < arr.length; i++) {
        str += arr[i] + ",";
    }
    return str;
}

//Problem 4 reverse string
$('#reverseSubmit').on('click', runReverse);

function runReverse() {
    var str = $('#reverseInput').val();
    $('#reverseOutput').html(reverseString(str));
}

function reverseString(str) {
    var result = "";
    var index = str.length - 1;
    for(index; index >= 0; index--) {
        result += str.charAt(index);
    }
    return result;
}

//Problem 5 factorial
$('#facSubmit').on('click', runFac);

function runFac() {
    var num = $('#facInput').val();
    $('#facOutput').html(factorial(num));
}

function factorial(num) {
    if(num == 0) {
        return 1;
    }
    return num * factorial(num - 1);
}

//Problem 6 even number
$('#evenSubmit').on('click', runEven);

function runEven() {
    var num = $('#evenInput').val();
    $('#evenOutput').html(evenNumber(num));
}

function evenNumber(num) {
    let quotient = num / 2;
    quotient = Math.round(quotient);
    if(quotient * 2 == num) {
        return `${num} is even number`;
    } else {
        return `${num} is odd number`;
    }
}

// Problem 7 Palindrome
$('#palindromeSubmit').on('click', runPalindrome);

function runPalindrome() {
    let str = $('#palindromeInput').val();
    $('#palindromeOutput').html(palindrome(str));
}

function palindrome(str) {
    if (str.toLowerCase()===reverseString(str).toLowerCase()) {
        return `${str} is palindrome`;
    } else {
        return `${str} is not palindrome`;
    }
}

// Problem 8 class Person
function Person(name, age) {
    this.name = name;
    this.age = age ;
}

$('#personSubmit').on('click', runPerson);

function runPerson() {
    let name = $('#nameInput').val();
    let age = $('#ageInput').val();
    var aPerson = new Person(name, age);

    $('#personOutput').html(`${aPerson.name} is ${aPerson.age} years old`);
}



