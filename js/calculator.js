var display = document.getElementById("display");
var clear = document.getElementById("clear");
var equal = document.getElementById("equal");
var number = document.querySelectorAll(".button");
var operator = document.querySelectorAll(".operator");
var point = document.getElementById("point");
var test2 = false;
var equal_clicked = false;
var sign = "";
var numa = 0;
var numb = 0;
var remembered_num;

number.forEach(function(element) {
    element.addEventListener("click", function() {
        var clicked = this.textContent;
        if(equal_clicked == true){
            display.value = clicked;
            equal_clicked = false;
        }else{
            display.value += clicked;
        }
    });
});

operator.forEach(function(element) {
    element.addEventListener("click", function() {
        sign = this.textContent;
        if(sign === "^"){
            sign = "**";
        }else if(sign === "%"){
            sign = "*0.01*";
        }
        numa = Number(display.value);
        var clicked = "";
        display.value = clicked;
        test2 = true;
    });
});

equal.addEventListener("click", function() {    
    numb = Number(display.value);
    if(test2 == true){
        remembered_num = numb;
    }
    if(sign === ""){
        display.value = numb
        test2 = false;
    }else{
        if(numb == ""){
            numa = parseFloat(eval((numa +sign+ numa)).toFixed(2));
        }else{
            numa = parseFloat(eval((numa +sign+ remembered_num)).toFixed(2));
            
        }
        display.value = numa;
            test2 = false;
    }
    equal_clicked = true;
});

clear.addEventListener("click", function() {
    var clearclicked = "";
    display.value = clearclicked;
    numa = "";
    numb = "";
    sign = "";
});

point.addEventListener("click", function() {
    pointclicked = ".";
    display.value += pointclicked;
});



