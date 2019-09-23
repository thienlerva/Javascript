/*
  Functions
  - Functions inherit from objects and may be passed as variables or store just like
  any other value.

  - No function overloading in JS -- last function is used missing parameters and ignored.

  - This keyword. "this" represents what the function is bound to at invocation time.

*/

function func() {

    console.log("inside of regular function");
}

func();

/*
 A function expression is very similar to and has almost the same
 syntax as a function declaration, however the main difference is that
 a function declaration has a name, which can be ommitted in function expression
 to create anonumous functions and functin expressions can be used to crete IIFE
*/
var functionExpression = function() {
    console.log("inside of regular function expression");
}

functionExpression();


//IIFE - Immediately invoked function expression
//execute as soon as they are defined.
//IIFE's are a design pattern, also known as self-excuting anonymous functions
(function() {
    console.log("this is an immediately invoked function expression");
})(); //parenthesis at the end invoke function

var person = (function() {
    var name = "Genenis";
    return name;
})();

var name = (function() { 
    var last = "Le";
    console.log(last);
})();

person;
// Immediately returned "Genesis"


/*
CLOSURES
Because JS does not have access mods/support encapsulation natively,
we use closures (nested functions) to emulate encapsulation
*/

var counter = (function() {

    var privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    }

}());

counter.privateCounter; //will return undefined. do not have access to counter
counter.value(); // return 0
counter.increment();
counter.increment();
counter.increment();
counter.value(); // return 3

var makeCounter = function() {

    var privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    }

};

makeCounter.increment(); // will not work
var counter1 = makeCounter();
counter1.increment();
var counter2 = makeCounter();
counter2.decrement();

var x=1;
switch(x) {
    case 1: console.log("Monday");
            break;
    default: console.log("wrong");
}

var isMomHappy = false;

var willIGetNewPhone = new Promise(function(resolve, reject) {
    if(isMomHappy) {
        var phone = {
            branch: 'Samsung',
            color: 'black'
        };
        resolve(phone);
    }
    else {
        var reason = 'Mom is not happy';
        reject(reason);
    }
}
);

var promise = new Promise(function(resolve, reject) {

    if(true) {
        resolve("Stuff worked");
    } else {
        reject("It broke");
    }
});

promise.then(function(resule) {
    console.log("Promise worked");
});

test = 0;
function aa() {
    console.log(test);
    var test = 100;
    console.log(test);

}

aa();
console.log(test);

var keepsHisWord = true;
var p = new Promise(function(resolve, reject) {
    if(keepsHisWord) {
        resolve("The man likes to keep his word");
    } else {
        reject("The man doesnot want to keep his word");
    }
});

var p4 = new Promise(function(resolve, reject) {

    let isClean = true;

    if(isClean) {
        resolve('clean');
    } else {
        reject('not clean');
    }
});

p4.then(function(value) {
    console.log("the room is " + value);
}).catch(function(value) {
    console.log('The room is ' + value)
})

p2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({
            message: "The man likes to keep his word",
            code: "aManKeepsHisWord"
        });
    }, 10 * 1000);
});
console.log(p2);

var momsPromise = new Promise(function(resolve, reject) {
    momsSavings = 200;
    priceOfPhone = 600;
    if(momsSavings > priceOfPhone) {
        resolve({
            branch: "iphone",
            model: "6s"
        });
    } else {
        reject("We donot have enough savings. Let us save some more money.");
    }
});

momsPromise.then(function(value) {
    console.log("Hurray I got this phone as a gift", JSON.stringify(value));
});

momsPromise.catch(function(reason) {
    console.log("Mom couldn't buy me the phone because ", reason);
});

momsPromise.finally(function() {
    console.log("Irrespective of whether my mom can buy me a phone or not, I still love her");
});

