window.onload = function() {

    $('#runFib').on("click", runFib);
    $('#runBubble').on('click', runBubble);
    $('#runRevString').on('click', runRevString);
    $('#runEvenNumber').on('click', runEvenNumber);
}

function runFib() {
    var n = $('#fibInput').val();
    $('#fibOutput').html(fib(n));
}

function fib(n) {
    if (n==0 | n==1) return n;
    return fib(n - 1) + fib(n-2);
}

function runBubble() {
    var  str = $('#bubbleInput').val();
    let arr = extractStringArray(str);

    $('#bubbleOutput').html(bubblesort(arr));
}

function extractStringArray(arr) {
    let strArr = arr.split(',');
    let numArr = new Array(strArr.length);
    for(let i = 0; i< strArr.length; i++) {
        numArr[i] = Number(strArr[i]);
    }
    return numArr;
}

function bubblesort(arr) {

    let len = arr.length;

    for(let i = 0; i < len - 1; i++) {
        for(let j = i+1; j < len; j++) {
            if(arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

function runRevString() {
    var str = $('#stringInput').val();
    $('#stringOutput').html(reverseString(str));
}

function reverseString(str) {
    var result = "";
    var index = str.length - 1;
    for (index; index >= 0; index--) {
        result += str.charAt(index);
    }
    return result;
}

function runEvenNumber() {
    var num = $('#evenNumberInput').val();
    $('#evenNumberOutput').html(evenNumber(num));
}

function evenNumber(number) {
    let quotient = number/2;
    quotient = Math.round(quotient);
    if(number == quotient * 2) return number + " is even number."
    else return number + " is odd number";
}