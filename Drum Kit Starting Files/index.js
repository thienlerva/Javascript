
$('.w').on("click", function() {
    alert("w");
});

$('.a').on("click", function() {
    alert("a");
});

$('#runFib').on('click', runFib);

function runFib() {
    var n = $('#fibInput').val();
    $('#fibOutput').html(fib(n));
}

function fib(n) {
    if (n==0 | n==1) return n;
    return fib(n - 1) + fib(n-2);
}

// $('.w').on('click', show);

// function show() {
//     alert("W");
// }