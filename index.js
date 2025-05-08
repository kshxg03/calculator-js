

var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var addBtn = document.getElementById('addBtn');
var subBtn = document.getElementById('subBtn');
var multiplyBtn = document.getElementById('multiplyBtn');
var divideBtn = document.getElementById('divideBtn');
var rslt = document.getElementById('result');

// num1.addEventListener('keydown', function(event) {
//     console.log('Key pressed: ' + event.key);
// });

addBtn.addEventListener('click', function(e) {
    number1 = num1.value;
    number2 = num2.value;
    sum  = Number(number1) + Number(number2);
    rslt.innerHTML = "Sum: " + sum;
    // console.log(sum);
})


subBtn.addEventListener('click', function(e) {
    number1 = num1.value;
    number2 = num2.value;
    diff  = Number(number1) - Number(number2);
    rslt.innerHTML = "Difference: " + diff;
    // console.log(diff);
})

multiplyBtn.addEventListener('click', function(e) {
    number1 = num1.value;
    number2 = num2.value;
    product  = Number(number1) * Number(number2);
    rslt.innerHTML = "Product: " + product;
    // console.log(diff);
})

divideBtn.addEventListener('click', function(e) {
    number1 = num1.value;
    number2 = num2.value;
    division  = Number(number1) / Number(number2);
    rslt.innerHTML = "Division: " + division;
    // console.log(diff);
})
