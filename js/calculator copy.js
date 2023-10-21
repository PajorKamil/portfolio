var display = document.getElementById("display");
var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var clear = document.getElementById("clear");
var percent = document.getElementById("percent");
var power = document.getElementById("power");
var divide = document.getElementById("divide");
var multi = document.getElementById("multi");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var equal = document.getElementById("equal");
var numa = 0;
var numb = 0;

zero.addEventListener("click", function() {
    var zeroclicked = 0;
    display.value += zeroclicked;
});

one.addEventListener("click", function() {
    var oneclicked = 1;
    display.value += oneclicked;
});

two.addEventListener("click", function() {
    var twoclicked = 2;
    display.value += twoclicked;
});

three.addEventListener("click", function() {
    var threeclicked = 3;
    display.value += threeclicked;
});

four.addEventListener("click", function() {
    var fourclicked = 4;
    display.value += fourclicked;
});

five.addEventListener("click", function() {
    var fiveclicked = 5;
    display.value += fiveclicked;
});

six.addEventListener("click", function() {
    var sixclicked = 6;
    display.value += sixclicked;
});

seven.addEventListener("click", function() {
    var sevenclicked = 7;
    display.value += sevenclicked;
});

eight.addEventListener("click", function() {
    var eightclicked = 8;
    display.value += eightclicked;
});

nine.addEventListener("click", function() {
    var nineclicked = 9;
    display.value += nineclicked;
});

clear.addEventListener("click", function() {
    var clearclicked = "";
    display.value = clearclicked;
    numa = 0;
    numb = 0;
});



plus.addEventListener("click", function() {
    numa = Number(display.value);
    var plusclicked = "";
    display.value = plusclicked;
    console.log(numa);
});

equal.addEventListener("click", function() {    
    numb = Number(display.value);
    console.log(numb);
    numa = numa + numb;
    display.value = numa;
});


