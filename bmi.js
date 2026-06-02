function calculateBMI(){

    let weight =
    document.getElementById("weight").value;

    let height =
    document.getElementById("height").value;

    if(weight == "" || height == ""){

        alert("Please Enter Weight And Height");

        return;

    }

    height = height / 100;

    let bmi = weight / (height * height);

    bmi = bmi.toFixed(2);

    document.getElementById("result").innerHTML =
    "Your BMI: " + bmi;

    if(bmi < 18.5){

        document.getElementById("status").innerHTML =
        "⚠️ Underweight";

    }

    else if(bmi >= 18.5 && bmi < 25){

        document.getElementById("status").innerHTML =
        "✅ Normal Weight";

    }

    else if(bmi >= 25 && bmi < 30){

        document.getElementById("status").innerHTML =
        "⚠️ Overweight";

    }

    else{

        document.getElementById("status").innerHTML =
        "❌ Obese";

    }

}