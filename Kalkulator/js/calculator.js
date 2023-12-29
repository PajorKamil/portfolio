const display = document.getElementById("display");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const change_sign = document.querySelector("#change_sign");
const percent = document.querySelector("#percent");
var operatorclicked = false;
var result = 0;
var numa = 0;
var numb = 0;
let dotAdded = false;

number.forEach(element => {
    element.addEventListener("click", function(){
        var clicked = this.textContent;
        if (clicked === '.' && dotAdded) {
            return;
        }
        if(operatorclicked == true){
            display.value = clicked;
            operatorclicked = false
        }else{
            display.value += clicked;
        }
        if (clicked === '.') {
            dotAdded = true;
        }
    })
});

change_sign.addEventListener("click", function(){
    if(display.value === "."){
        return
    }else{
        display.value = display.value * -1
    }
    
})

percent.addEventListener("click", function(){
    if(display.value === "."){
        return
    }else{
        display.value = display.value * 0.01
    }
    
})

operator.forEach(element => {
    element.addEventListener("click", function(){
        operatorclicked = true;
        dotAdded = false;
        sign = this.textContent;
        numa = parseFloat(display.value);
        console.log("sign: "+sign);

        if(sign === "+/-"){
            display.value = numa * -1;
        }
    })
});

function numDigitsAfterDecimal(x) {
    var afterDecimalStr = x.toString().split('.')[1] || ''
    return afterDecimalStr.length
}

function calculate(){
    switch(sign){
        case "+":
            result = numa + numb;
            var numalenght = numDigitsAfterDecimal(numa);
            var numblenght = numDigitsAfterDecimal(numb);
            if(numalenght > numblenght){
                result = result.toFixed(numalenght);
            }else{
                result = result.toFixed(numblenght);
            }
            break;
        case "-":
            result = numa - numb;
            if(result != 0){
                var numalenght = numDigitsAfterDecimal(numa);
                var numblenght = numDigitsAfterDecimal(numb);
                if(numalenght > numblenght){
                    result = result.toFixed(numalenght);
                }else{
                    result = result.toFixed(numblenght);
                }
            }
            break;
        case "*":
            result = numa * numb;
            var numalenght = numDigitsAfterDecimal(numa);
            var numblenght = numDigitsAfterDecimal(numb);
            result = parseFloat(result.toFixed(numalenght+numblenght));
            break;
        case "/":
            if(numb == 0){
                result = "Error";
            }else{
                result = numa / numb;
                if(numblenght = 1){
                    result = parseFloat(result.toFixed(1));
                }
            }
            break;
        default:
            console.log('Error');
    }
}

equal.addEventListener("click", function(){
    numb = parseFloat(display.value);
    console.log("Numb: "+numb);
    calculate();
    display.value = result
});

clear.addEventListener("click", function() {
    display.value = '';
    numa = "";
    numb = "";
    sign = "";
    dotAdded = false;
});
