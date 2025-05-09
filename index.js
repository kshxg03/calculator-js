

var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var primeNum = document.getElementById('primeNum');
var sqrNum = document.getElementById('sqrNum');
var rootNum = document.getElementById('rootNum');

var addBtn = document.getElementById('addBtn');
var subBtn = document.getElementById('subBtn');
var multiplyBtn = document.getElementById('multiplyBtn');
var divideBtn = document.getElementById('divideBtn');
var clearBtn = document.getElementById('clearBtn');
var primeCheckBtn = document.getElementById('primeCheckBtn');
var sqrBtn = document.getElementById('sqrBtn');
var rootBtn = document.getElementById('rootBtn');

var rslt = document.getElementById('result');
// var primeRslt = document.getElementById('primeOrNot');
// var sqrRslt = document.getElementById('sqrRslt');



// num1.addEventListener('keydown', function(event) {
//     console.log('Key pressed: ' + event.key);
// });

addBtn.addEventListener('click', function() {
    number1 = num1.value;
    number2 = num2.value;
    sum  = Number(number1) + Number(number2);
    rslt.innerHTML = "Sum: " + sum;
    num1.value = "";
    num2.value = "";
    // console.log(sum);
})


subBtn.addEventListener('click', function() {
    number1 = num1.value;
    number2 = num2.value;
    diff  = Number(number1) - Number(number2);
    rslt.innerHTML = "Difference: " + diff;
    num1.value = "";
    num2.value = "";
    // console.log(diff);
})

multiplyBtn.addEventListener('click', function() {
    number1 = num1.value;
    number2 = num2.value;
    product  = Number(number1) * Number(number2);
    rslt.innerHTML = "Product: " + product;
    num1.value = "";
    num2.value = "";
    // console.log(diff);
})

divideBtn.addEventListener('click', function() {
    number1 = num1.value;
    number2 = num2.value;
    division  = Number(number1) / Number(number2);
    rslt.innerHTML = "Division: " + division;
    num1.value = "";
    num2.value = "";
    // console.log(diff);
})

primeCheckBtn.addEventListener('click', function() {
    n = primeNum.value;
    if (n <= 1) {
        rslt.innerHTML = n + " is not a prime number.";
    } else {
        let isPrime = true;  // Assume n is prime unless proven otherwise
        for (var i = 2; i <= Math.sqrt(n); i++) {  // No need to check beyond sqrt(n)
            if (n % i == 0) {
                isPrime = false;
                break;  // Exit loop as we found a divisor
            }
        }
        if (isPrime) {
            rslt.innerHTML = n + " is a prime number.";
        } else {
            rslt.innerHTML = n + " is not a prime number.";
        }
    }
    primeNum.value = "";
});

sqrBtn.addEventListener('click', function() {
    num = sqrNum.value;
    sqrResult = Math.pow(num, 2);
    rslt.innerHTML = sqrResult;
    sqrNum.value = "";
})

rootBtn.addEventListener('click', function() {
    let num = rootNum.value;
    let rootResult = Math.sqrt(num);
    rslt.innerHTML = rootResult;
    rootNum.value = "";
});

clearBtn.addEventListener('click', function() {
    rslt.innerHTML = "";
})
