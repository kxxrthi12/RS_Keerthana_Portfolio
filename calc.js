let display = document.getElementById("display");

function appendValue(value){

    display.value += value;

}

function clearDisplay(){

    display.value = "";

}

function deleteLast(){

    display.value = display.value.slice(0,-1);

}

function calculate(){

    try{

        let result = eval(display.value);

        let history = document.getElementById("history");

        let item = document.createElement("li");

        item.innerHTML = display.value + " = " + result;

        history.appendChild(item);

        display.value = result;

    }

    catch{

        alert("Invalid Calculation");

    }

}