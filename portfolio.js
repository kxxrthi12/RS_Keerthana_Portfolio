// Typing Effect

let text = "CSE Student | Data Science Enthusiast";
let i = 0;

function typing() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 100);

    }

}

window.onload = typing;


// Dark Mode

function toggleMode() {

    document.body.classList.toggle("dark");

}

document.getElementById("darkBtn")
.addEventListener("click", toggleMode);


// View Projects Button

function viewProjects() {

    document.getElementById("projects")
    .scrollIntoView({
        behavior: "smooth"
    });

}

document.getElementById("projectBtn")
.addEventListener("click", viewProjects);


// Pet Adoption Website

function openPetProject() {

    window.open("pet.html");

}

document.querySelector(".petBtn")
.addEventListener("click", openPetProject);


// Fashion Store Website

function openFashionProject() {

    window.open("fashion.html");

}

document.querySelector(".fashionBtn")
.addEventListener("click", openFashionProject);


// Smart Calculator

function openCalculatorProject() {

    window.open("CalC.html");

}

document.querySelector(".calculatorBtn")
.addEventListener("click", openCalculatorProject);


// BMI Calculator

function openBMIProject() {

    window.open("bmi.html");

}

document.querySelector(".bmiBtn")
.addEventListener("click", openBMIProject);