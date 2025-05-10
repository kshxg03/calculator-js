
// input fields
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var primeNum = document.getElementById('primeNum');
var sqrCubNum = document.getElementById('sqrCubNum');
var rootNum = document.getElementById('rootNum');

// buttons
var addBtn = document.getElementById('addBtn');
var subBtn = document.getElementById('subBtn');
var multiplyBtn = document.getElementById('multiplyBtn');
var divideBtn = document.getElementById('divideBtn');
var clearBtn = document.getElementById('clearBtn');
var primeCheckBtn = document.getElementById('primeCheckBtn');
var sqrBtn = document.getElementById('sqrBtn');
var cubBtn = document.getElementById('cubBtn');
var sqRootBtn = document.getElementById('sqRootBtn');
var cbRootBtn = document.getElementById('cbRootBtn');

// output 
var rslt = document.getElementById('result');
var outputText = rslt.innerHTML;

// event listeners
addBtn.addEventListener('click', function () {
    let number1 = num1.value;
    let number2 = num2.value;
    let sum = Number(number1) + Number(number2);
    rslt.innerHTML = outputText + " " + sum;
    num1.value = "";
    num2.value = "";
    // console.log(sum);
})


subBtn.addEventListener('click', function () {
    let number1 = num1.value;
    let number2 = num2.value;
    let diff = Number(number1) - Number(number2);
    rslt.innerHTML = outputText + " " + diff;
    num1.value = "";
    num2.value = "";
    // console.log(diff);
})

multiplyBtn.addEventListener('click', function () {
    let number1 = num1.value;
    let number2 = num2.value;
    let product = Number(number1) * Number(number2);
    rslt.innerHTML = outputText + " " + product;
    num1.value = "";
    num2.value = "";
    // console.log(diff);
})

divideBtn.addEventListener('click', function () {
    let number1 = num1.value;
    let number2 = num2.value;
    let division = Number(number1) / Number(number2);
    rslt.innerHTML = outputText + " " + division;
    num1.value = "";
    num2.value = "";
    // console.log(diff);
})

primeCheckBtn.addEventListener('click', function () {
    let n = primeNum.value;
    if (n <= 1) {
        rslt.innerHTML = n + " is not a prime number.";
    } else {
        let isPrime = true;  
        for (var i = 2; i <= Math.sqrt(n); i++) { 
            if (n % i == 0) {
                isPrime = false;
                break; 
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

sqrBtn.addEventListener('click', function () {
    let num = sqrCubNum.value;
    let sqrResult = Math.pow(num, 2);
    rslt.innerHTML = sqrResult;
    sqrCubNum.value = "";
})

cubBtn.addEventListener('click', function () {
    let num = sqrCubNum.value;
    let cubResult = Math.pow(num, 3);
    rslt.innerHTML = cubResult;
    sqrCubNum.value = "";
})

sqRootBtn.addEventListener('click', function () {
    let num = rootNum.value;
    let rootResult = Math.sqrt(num);
    rslt.innerHTML = rootResult;
    rootNum.value = "";
});

cbRootBtn.addEventListener('click', function () {
    let num = rootNum.value;
    let rootResult = Math.cbrt(num);
    rslt.innerHTML = rootResult;
    rootNum.value = "";
});

clearBtn.addEventListener('click', function () {
    rslt.innerHTML = outputText;
})
